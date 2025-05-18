import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Function to handle vehicle data saving
async function handleVehicleData(data) {
  try {
    const filePath = path.join(__dirname, 'src', 'Cloudinary', 'data.json')

    // Read existing data
    let jsonData = { vehicles: [] }
    try {
      const fileContent = await fs.readFile(filePath, 'utf8')
      jsonData = JSON.parse(fileContent)
    } catch (error) {
      console.log('Creating new data file')
    }

    // Add new vehicle
    const newVehicle = {
      ...data,
      id: Date.now(),
      createdAt: new Date().toISOString()
    }
    jsonData.vehicles.push(newVehicle)

    // Save back to file
    await fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), 'utf8')
    return { success: true, message: 'Vehicle added successfully', vehicle: newVehicle }
  } catch (error) {
    console.error('Error saving data:', error)
    throw error
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'configure-server',
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          if (req.url === '/api/vehicles' && req.method === 'POST') {
            try {
              // Read request body
              const chunks = []
              req.on('data', chunk => chunks.push(chunk))
              req.on('end', async () => {
                try {
                  const data = JSON.parse(Buffer.concat(chunks).toString())
                  const result = await handleVehicleData(data)

                  res.setHeader('Content-Type', 'application/json')
                  res.end(JSON.stringify(result))
                } catch (error) {
                  res.statusCode = 500
                  res.end(JSON.stringify({
                    success: false,
                    message: 'Error saving data',
                    error: error.message
                  }))
                }
              })
            } catch (error) {
              res.statusCode = 500
              res.end(JSON.stringify({
                success: false,
                message: 'Error processing request',
                error: error.message
              }))
            }
          } else {
            next()
          }
        })
      }
    }
  ],
  server: {
    port: 5173
  }
})
