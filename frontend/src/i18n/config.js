import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            "agreement": {
                "title": "Vehicle Rental Agreement",
                "intro": "Please review and accept our vehicle rental terms and conditions before proceeding with your booking.",
                "sections": {
                    "definitions": {
                        "title": "Definitions",
                        "vehicle": "Vehicle - The vehicle to be rented whose particulars are listed on the overleaf of this vehicle rental agreement is hereinafter referred to as the \"Vehicle\".",
                        "renter": "Renter - The individual or company representative whose signatures appears on the overleaf of this vehicle rental agreement and who will rent the vehicle is hereinafter referred to as \"Renter\"."
                    },
                    "rentalRates": {
                        "title": "1. Rental Rates",
                        "content": "Daily rental rates are based on a 24 hour \"rental day\" starting at the time of rental. The minimum charge is one day plus extra kilometer if applicable. The renter will pay for each hour and/or any part of an hour in excess of a rental day until the Vehicle is returned up to the applicable daily rate. Extra kilometer, if applicable will be the number of kilometers driven as determined by the odometer readings at the beginning and end of the rental. The Renter maybe charged an additional daily rate fee or a per rental early return fee if the Renter does not return the Vehicle on the time and date due. Weekend, Weekly, and Monthly Rates often reflect a savings over daily rates; however, returning a weekend or weekly rental early may not result in a proportionate refund. Additional days beyond the weekend rate plan may be charged at the extra day rate published on the Vehicle Rental Agreement. Will not refund the rent paid if the car returned earlier than agreed upon."
                    },
                    "deliveryReturn": {
                        "title": "2. Delivery and Return",
                        "content": "The Renter agrees to return the vehicle with all the documents and accessories and in the same condition to RCB Luxury Car Rental as the time of delivery and on the date designated in this Vehicle Rental Agreement. RCB Luxury Car Rental reserves the right to repossess the Vehicle at any time upon demand at the Renter's expense if the Vehicle is used in violation of this Vehicle Rental Agreement."
                    },
                    "conditionsOfUse": {
                        "title": "3. Conditions of Use",
                        "content": [
                            "(1) The Renter will not use the Vehicle for off road driving, motorsports, rallying, towing or any activities that may damage the Vehicle.",
                            "(2) The Vehicle will not be used for transportation of any illegal substances (alcohol, drugs, etc.) or to transport merchandise or to transport passengers for hire or to participate in any other illegal act in case of fines or confiscation of the Vehicle, the Renter is responsible for payment of all damages to RCB luxury Car Rental, including full value of the vehicle, fines, and claims of passengers, third party claims and loss of income or loss of rental.",
                            "(3) The Renter will observe the traffic rules and regulations and will be liable to pay for penalties arising from any traffic offences."
                        ]
                    },
                    "drivingAge": {
                        "title": "4. Driving Age",
                        "content": "The minimum age to rent or drive an RCB Luxury Car Rental vehicle in the United Arab Emirates is 21 years of age."
                    },
                    "authorized": {
                        "title": "5. Authorized Drivers",
                        "content": "An RCB Luxury Car Rental vehicle may be driven only by Authorized Driver. An Authorized Driver is the Renter and any additional person who appears at this time of rental, and signs the Vehicle Rental Agreement. All Authorized Drivers warrant the satisfy and agreed requirements, have a valid driver's license, and fulfill our other qualifications. No other persons are authorized to drive the Vehicle."
                    },
                    "creditQualifications": {
                        "title": "6. Credit Qualifications/Requirements",
                        "content": "The Renter must present at the time of rental a major credit card in their own name with available credit. A hold will be placed on the credit card for the estimated amount of the rental. The hold will be removed 30 days after the end of the rental when the final charges are settled."
                    },
                    "vehicleCleanliness": {
                        "title": "7. Vehicle Cleanliness",
                        "content": "All rental vehicles should be returned in the same condition the hirer rented in. If the car returned not clean, AED 50 to 100 AED will be charged."
                    },
                    "fuelPolicy": {
                        "title": "8. Fuel Policy",
                        "content": "The Renter must return the Vehicle with the same amount of fuel as that recorded in the Vehicle Check Report when the vehicle was first taken out. There is no credit or refund given for any extra fuel in the tank at the end of the rental."
                    },
                    "geographicLimitations": {
                        "title": "9. Geographic Limitations",
                        "content": "The Renter and any Authorized Drivers are restricted to drive the vehicle within the borders of the United Arab Emirates only. The vehicle is prohibited from leaving the UAE and no insurance coverage applies outside the UAE."
                    },
                    "driverLicenses": {
                        "title": "10. Driver Licenses",
                        "content": "A Renter or any additional Authorized Driver must present at the time of rental, a driver's license issued by an accepted government authority that has been held for at least one year."
                    },
                    "insurance": {
                        "title": "11. Insurance",
                        "content": [
                            "RCB Luxury Car Rental provides insurance coverage for Renters and Authorized Drivers using the Vehicle within its permission (and not otherwise) in accordance with an automobile liability insurance policy.",
                            "(1) Few of our vehicles are under third party insurance and the client would be informed about it when booking the vehicle.",
                            "(2) Kindly note that the vehicle is under third party insurance so any damages, accidents, dents or scratches made during the period of rental the client will be held liable. The client needs to return the car in the same condition as delivered."
                        ]
                    },
                    "indemnity": {
                        "title": "12. Indemnity",
                        "content": "The Renter will indemnify and hold harmless RCB Luxury Car Rental, its employees and agents from and against any loss, liability and expense arising directly and indirectly from (1) Any breach of the terms of this Vehicle Rental Agreement by the Renter (2) Loss of or damage to the Vehicle (3) Loss of or damage to Renter's property left in the Vehicle or for loss or inconvenience resulting from delivery delays, breakdown or any cause beyond the control of RCB Luxury Car Rental."
                    },
                    "lossOrDamage": {
                        "title": "13. Loss or Damage & Excess Insurance",
                        "content": [
                            "The Renter and any Authorized Driver are absolutely liable for any loss or damage to the Vehicle, whether due to theft, fire, hail, flood, collision, vandalism, or any other cause. This liability will be borne by the Renter as:",
                            "(1) In case of Partial Loss or damage to the vehicle as determined by the insurance company of RCB Luxury Car Rental and if the Renter is deemed to be at fault, the Renter will be liable to pay the Excess Insurance Amount indicated on the overleaf of those Vehicle Rental Agreement.",
                            "(2) In case of Total Loss or damage to the vehicle as determined by the insurance company of RCB Luxury Car Rental and if the Renter is deemed to be at fault, the Renter will be liable to pay the excess amount of 25% of the full replacement value of the Vehicle.",
                            "Additional costs include:",
                            "• Actual towing and storage charges",
                            "• Loss of use",
                            "• Diminution in value, regardless of whether the Vehicle is repaired or not",
                            "• All rental charges through the date the Renter reports the incident if not returnable or the return date, whichever is later",
                            "• Any out-of-pocket expenses incurred by RCB Luxury Car Rental",
                            "• A reasonable administrative fee",
                            "• Pro-rata license plate fees, all as allowed by law",
                            "In case a plate number from the vehicle falls off or goes missing during the period of rental by the client, There would be a charge of AED 300 + RTA plate replacement fee of AED 150 for applying lost item report with the Dubai police."
                        ]
                    },
                    "noInsuranceCoverage": {
                        "title": "14. No Insurance Coverage Circumstances",
                        "content": [
                            "No insurance coverage will apply in the following circumstances:",
                            "(i) The Renter or Authorized Driver subleases the Vehicle without consent",
                            "(ii) The Renter or Authorized Driver is under the influence of alcohol or drugs",
                            "(iii) The Vehicle is driven by an unauthorized driver",
                            "(iv) The Vehicle is driven outside the United Arab Emirates"
                        ]
                    },
                    "refundPolicy": {
                        "title": "15. Refund Policy",
                        "content": "Once the booking is confirmed and payment is completed, booking reservations cannot be cancelled as we have no refund policy with RCB luxury car rental."
                    },
                    "paymentPolicy": {
                        "title": "16. Payment Policy",
                        "content": "In case if any client fails to clear the outstanding overdue payments his/her ID would be on hold and will be surrendered to the relevant authorities immediately."
                    },
                    "vehicleDeliveryPolicy": {
                        "title": "17. Vehicle Delivery Policy",
                        "content": "We deliver our cars to clients across Dubai within the radius of 15KM for vehicle drop off and pick up which is complimentary. In case it is outside of the limit of 15KM the client needs to pay the additional fare for the pick up and drop off of the vehicle upon providing the bill copy as per the policy at RCB luxury car rental."
                    },
                    "kilometreRange": {
                        "title": "18. Kilometre Range",
                        "content": "The limit for any vehicle for self drive would be 200KM per day and the client would have to pay AED 2 per KM if it exceeds the limit as per our policy RCB luxury car rental."
                    },
                    "salikToll": {
                        "title": "19. Salik/Parking Toll",
                        "content": "When the vehicle is being delivered to the client if there is a salik/Darb crossing the client would be liable to pay for it as the vehicle is being used to deliver to the client respectively. As per the changes made by the RTA authorities regarding the salik charges during peak hours the charge per toll will be AED 7/- and AED 5/- during regular hours. Each round trip completed by the client from Dubai to Abu Dhabi AED 30/- inc vat would be charge as per the policy of RCB luxury car rental."
                    },
                    "finePayments": {
                        "title": "20. Fine Payments",
                        "content": "In case there is a fine on the vehicle the client is liable to pay for it along with additional fee of AED 40/- per fine which included (i) AED 20/- convenient fee (ii) AED 20/- admin fee as per the policy of RCB luxury car rental."
                    },
                    "returnPolicy": {
                        "title": "21. Return Policy",
                        "content": "For all self-drive bookings at RCB Luxury Car Rental, once a vehicle is delivered to the client and the booking is confirmed for a 1-day rental, the vehicle must be returned at the same time the following day. A grace period of 30 minutes beyond the scheduled return time is allowed. However, any delay exceeding 30 minutes will incur additional charges, for which the client will be held liable in accordance with our rental policy."
                    },
                    "paymentsAndFees": {
                        "title": "22. Payments and Additional Fee",
                        "content": [
                            "At RCB Luxury Car Rental, we offer a variety of convenient payment options, including cash, bank transfer, payment links, and bank cards. We also accept all major foreign currencies, with exchange rates calculated based on the official rate on the day of payment.",
                            "Additional charges:",
                            "• Payment Links & Bank Cards: 5% processing fee",
                            "• Buy Now, Pay Later Services (Tabby/Tamara): 12% additional charge on total order value per transaction"
                        ]
                    },
                    "otherCharges": {
                        "title": "23. Other Charges and Fees",
                        "content": [
                            "(1) The Renter will pay to RCB Luxury Car Rental all costs including reasonable legal fees, incurred in collecting payments due from the Renter under this Vehicle Rental Agreement",
                            "(2) The Renter will pay any fines, penalties, court costs or other expenses, imposed on RCB Luxury Car Rental by law arising from the use of vehicle while on rental to the Renter unless due to fault of RCB Luxury Car Rental"
                        ]
                    },
                    "accidentProcedure": {
                        "title": "24. Procedure to Follow in Case of Accident/Theft",
                        "content": [
                            "In case of an accident (with or without damage to the Vehicle), theft, or personal injuries:",
                            "(1) The Police must be called to the scene and obtain a Police Report",
                            "(2) Secure all data of other parties and witnesses",
                            "(3) Do not accept any claims by third parties",
                            "(4) Assist RCB Luxury Car Rental and/or its insurance company in all claims",
                            "(5) No repair without prior approval of RCB Luxury Car Rental"
                        ]
                    },
                    "language": {
                        "title": "25. Language",
                        "content": "In the event of conflict between the text of this Agreement in the English language and the text of this Agreement in the Arabic language or any other Arabic translation and any competent court determining that such Arabic text or translation shall prevail, it is agreed the English text of this Agreement shall nevertheless be used to assist in any interpretation."
                    }
                },
                "accept": "I have read and agree to the vehicle rental terms and conditions",
                "error": "Please accept the terms and conditions to continue",
                "continue": "Continue"
            }
        }
    },
    ar: {
        translation: {
            "agreement": {
                "title": "اتفاقية تأجير السيارات",
                "intro": "يرجى مراجعة وقبول شروط وأحكام تأجير السيارات قبل المتابعة مع حجزك.",
                "sections": {
                    "definitions": {
                        "title": "التعريفات",
                        "vehicle": "السيارة - السيارة المراد تأجيرها والتي تفاصيلها مدرجة على ظهر اتفاقية تأجير السيارة هذه يشار إليها فيما يلي باسم \"السيارة\".",
                        "renter": "المستأجر - الفرد أو ممثل الشركة الذي يظهر توقيعه على ظهر اتفاقية تأجير السيارة هذه والذي سيقوم باستئجار السيارة يشار إليه فيما يلي باسم \"المستأجر\"."
                    },
                    "rentalRates": {
                        "title": "١. أسعار التأجير",
                        "content": "تعتمد أسعار التأجير اليومية على \"يوم تأجير\" مدته 24 ساعة تبدأ من وقت التأجير. الحد الأدنى للرسوم هو يوم واحد بالإضافة إلى الكيلومترات الإضافية إن وجدت. سيدفع المستأجر مقابل كل ساعة و/أو أي جزء من ساعة تزيد عن يوم التأجير حتى إعادة السيارة وفقاً للسعر اليومي المطبق."
                    },
                    "deliveryReturn": {
                        "title": "٢. التسليم والإرجاع",
                        "content": "يوافق المستأجر على إعادة السيارة مع جميع المستندات والملحقات وبنفس الحالة إلى آر سي بي لتأجير السيارات الفاخرة كما في وقت التسليم وفي التاريخ المحدد في اتفاقية تأجير السيارة هذه. تحتفظ آر سي بي لتأجير السيارات الفاخرة بالحق في استعادة السيارة في أي وقت عند الطلب على نفقة المستأجر إذا تم استخدام السيارة في انتهاك لهذه الاتفاقية."
                    },
                    "conditionsOfUse": {
                        "title": "٣. شروط الاستخدام",
                        "content": ["لن يستخدم المستأجر السيارة للقيادة خارج الطرق أو رياضة السيارات أو السباقات أو القطر أو أي أنشطة قد تضر بالسيارة.",
                            "لن يتم استخدام السيارة لنقل أي مواد غير قانونية أو للمشاركة في أي عمل غير قانوني.",
                            "سيلتزم المستأجر بقواعد وأنظمة المرور وسيكون مسؤولاً عن دفع الغرامات الناشئة عن أي مخالفات مرورية."]
                    },
                    "drivingAge": {
                        "title": "٤. سن القيادة",
                        "content": "الحد الأدنى لسن استئجار أو قيادة سيارة آر سي بي لتأجير السيارات الفاخرة في الإمارات العربية المتحدة هو 21 عاماً."
                    },
                    "authorized": {
                        "title": "٥. السائقون المصرح لهم",
                        "content": "يسمح بقيادة سيارة RCB المؤجرة فقط بواسطة سائق مصرح له. السائق المصرح له هو المستأجر وأي شخص إضافي يحضر وقت الاستئجار ويوقع على اتفاقية تأجير السيارة. يؤكد جميع السائقين المصرح لهم استيفاء الشروط المتفق عليها، وأن لديهم رخصة قيادة سارية المفعول، ومستوفون لمؤهلاتنا الأخرى. لا يسمح لأي شخص آخر بقيادة السيارة."
                    },
                    "creditQualifications": {
                        "title": "٦. متطلبات/مؤهلات الائتمان",
                        "content": "يجب على المستأجر تقديم بطاقة ائتمان رئيسية باسمه مع توفر رصيد. سيتم حجز المبلغ المقدر للتأجير على بطاقة الائتمان. سيتم رفع الحجز بعد ٣٠ يوما من انتهاء الاستئجار عند تسوية الرسوم النهائية."
                    },
                    "vehicleCleanliness": {
                        "title": "٧. نظافة المركبة",
                        "content": "يجب إعادة جميع المركبات المستأجرة بنفس الحالة التي استأجرها المستأجر. في حال عدم نظافة المركبة، يتم فرض رسوم تتراوح بين ٥٠ و ١٠٠ درهم إماراتي."
                    },
                    "fuelPolicy": {
                        "title": "٨. سياسة الوقود",
                        "content": "يجب على المستأجر إعادة المركبة بنفس كمية الوقود المسجلة في تقرير فحص المركبة عند إخراجها. لا يمنح أي رصيد أو استرداد لأي وقود إضافي في الخزان عند نهاية فترة التأجير."
                    },
                    "geographicLimitations": {
                        "title": "٩. القيود الجغرافية",
                        "content": "يحظر على المستأجر والسائقين المصرح لهم قيادة المركبة داخل حدود دولة الإمارات العربية المتحدة فقط. يحظر على المركبة مغادرة الإمارات العربية المتحدة، ولا تطبق أي تغطية تأمينية خارجها."
                    },
                    "driverLicenses": {
                        "title": "١٠. رخص القيادة",
                        "content": "يجب على المستأجر أو أي سائق إضافي مصرح له أن يقدم في وقت التأجير رخصة قيادة صادرة عن سلطة حكومية مقبولة والتي تم الاحتفاظ بها لمدة عام على الأقل."
                    },
                    "insurance": {
                        "title": "١١. التأمين",
                        "content": "توفر شركة RCB تغطية تأمينية للمستأجرين والسائقين المصرح لهم باستخدام المركبة في حدود إذنها (وليس خلاف ذلك) وفقا لسياسة تأمين مسؤولية السيارة."
                    },
                    "indemnity": {
                        "title": "١٢. التعويض",
                        "content": "يتعهد المستأجر بتعويض وحماية شركة RCB وموظفيها ووكلائها من وضع أي خسارة أو مسؤولية ونفقات تنشأ بشكل مباشر وغير مباشر عن (١) أي خرق لشروط اتفاقية تأجير السيارة هذه من قبل المستأجر (٢) فقدان أو تلف السيارة (٣) فقدان أو تلف ممتلكات المستأجر المتروكة في السيارة أو عن الخسارة أو الإزعاج الناتج عن تأخير التسليم أو العطل أو أي سبب خارج سيطرة شركة RCB."
                    },
                    "lossOrDamage": {
                        "title": "١٣. الخسارة أو الضرر والتأمين الزائد",
                        "content": "المستأجر وأي سائق مصرح له مسؤولان تماماً عن أي خسارة أو ضرر يلحق بالمركبة، سواء كان ذلك بسبب السرقة أو الحريق أو البرد أو الفيضان أو الاصطدام أو التخريب أو أي سبب آخر."
                    },
                    "noInsuranceCoverage": {
                        "title": "١٤. لا توجد تغطية تأمينية في الحالات التالية",
                        "content": [
                            "لن يتم تطبيق أي تغطية تأمينية في الحالات التالية:",
                            "(أ) يقوم المستأجر أو السائق المصرح له، خلال فترة التأجير، بتأجير المركبة من الباطن دون موافقة أدرينالين لتأجير السيارات",
                            "(ب) المستأجر أو السائق المصرح له كان تحت تأثير الكحول أو المخدرات وقت الحادث.",
                            "(ج) تتم قيادة السيارة بواسطة سائق غير مصرح له.",
                            "(د) تتم قيادة السيارة خارج دولة الإمارات العربية المتحدة حيث لا تطبق أي تغطية تأمينية"
                        ]
                    },
                    "refundPolicy": {
                        "title": "١٥. سياسة الاسترداد",
                        "content": "بمجرد تأكيد الحجز وإتمام الدفع، لا يمكن إلغاء حجوزات الحجز حيث لا توجد لدينا سياسة استرداد مع شركة RCB لتأجير السيارات الفاخرة."
                    },
                    "paymentPolicy": {
                        "title": "١٦. سياسة الدفع",
                        "content": "في حالة فشل أي عميل في سداد المدفوعات المستحقة المتأخرة سيتم تعليق هويته وتسليمها إلى السلطات المختصة على الفور."
                    },
                    "vehicleDeliveryPolicy": {
                        "title": "١٧. سياسة تسليم السيارة",
                        "content": "نقوم بتسليم سياراتنا للعملاء في جميع أنحاء دبي في نطاق 15 كم لتسليم واستلام السيارة مجانا. في حالة كونها خارج حدود 15 كم، يحتاج العميل إلى دفع الأجرة الإضافية لاستلام وتسليم السيارة عند تقديم نسخة الفاتورة وفقا للسياسة في شركة RCB لتأجير السيارات الفاخرة."
                    },
                    "kilometreRange": {
                        "title": "١٨. مدى الكيلومترات",
                        "content": "الحد الأقصى لأي مركبة للقيادة الذاتية هو 200 كيلومتر في اليوم وسيتعين على العميل دفع 2 درهم إماراتي لكل كيلومتر إذا تجاوز الحد وفقا لسياسة تأجير السيارات الفاخرة RCB."
                    },
                    "salikToll": {
                        "title": "١٩. سالك/رسوم المرور",
                        "content": "عند تسليم السيارة إلى العميل إذا كان هناك معبر سالك / درب، سيكون العميل مسؤولاً عن دفعها حيث يتم استخدام السيارة لتسليم العميل على التوالي. وفقا للتغييرات التي أجرتها سلطات هيئة الطرق والمواصلات بشأن رسوم سالك خلال ساعات الذروة ستكون الرسوم لكل مرور 7 دراهم و 5 دراهم خلال الساعات العادية. سيتم فرض رسوم قدرها 30 درهماً إماراتياً شاملة ضريبة القيمة المضافة على كل رحلة ذهاباً وإياباً يكملها العميل من دبي إلى أبوظبي وفقا لسياسة RCB لتأجير السيارات الفاخرة."
                    },
                    "finePayments": {
                        "title": "٢٠. دفع الغرامات",
                        "content": "في حالة وجود غرامة على السيارة يكون العميل مسؤولاً عن دفعها بالإضافة إلى رسوم إضافية قدرها 40 درهماً إماراتياً لكل غرامة والتي تشمل (أ) رسوماً مريحة قدرها 20 درهماً إماراتياً (ب) رسوم إدارية قدرها 20 درهماً إماراتياً وفقا لسياسة RCB لتأجير السيارات الفاخرة."
                    },
                    "returnPolicy": {
                        "title": "٢١. سياسة الإرجاع",
                        "content": "بالنسبة لجميع حجوزات القيادة الذاتية في RCB Luxury Car Rental، بمجرد تسليم السيارة إلى العميل وتأكيد الحجز لمدة يوم واحد، يجب إعادة السيارة في نفس الوقت في اليوم التالي. يسمح بفترة سماح 30 دقيقة بعد وقت الإرجاع المقرر. ومع ذلك، فإن أي تأخير يتجاوز 30 دقيقة سيؤدي إلى فرض رسوم إضافية، والتي سيكون العميل مسؤولاً عنها وفقاً لسياسة التأجير الخاصة بنا."
                    },
                    "paymentsAndFees": {
                        "title": "٢٢. المدفوعات والرسوم الإضافية",
                        "content": [
                            "في RCB Luxury Car Rental، نقدم مجموعة متنوعة من خيارات الدفع المريحة، بما في ذلك النقد والتحويل المصرفي وروابط الدفع والبطاقات المصرفية. كما نقبل جميع العملات الأجنبية الرئيسية، مع احتساب أسعار الصرف بناءً على السعر الرسمي في يوم الدفع.",
                            "رسوم إضافية:",
                            "• روابط الدفع والبطاقات المصرفية: رسوم معالجة 5%",
                            "• خدمات اشتر الآن وادفع لاحقاً (Tabby/Tamara): رسوم إضافية 12% على إجمالي قيمة الطلب لكل معاملة"
                        ]
                    },
                    "otherCharges": {
                        "title": "٢٣. الرسوم والتكاليف الأخرى",
                        "content": [
                            "(١) يتحمل المستأجر جميع التكاليف بما في ذلك الرسوم القانونية المعقولة التي تتكبدها في تحصيل المدفوعات المستحقة من المستأجر بموجب اتفاقية تأجير السيارة هذه",
                            "(٢) يدفع المستأجر أي غرامات أو عقوبات أو تكاليف محكمة أو نفقات أخرى مفروضة على شركة RCB بموجب القانون والتي تنشأ عن استخدام السيارة أثناء التأجير للمستأجر ما لم يكن ذلك بسبب خطأ من شركة RCB"
                        ]
                    },
                    "accidentProcedure": {
                        "title": "٢٤. الإجراء المتبع في حالة حادث/سرقة",
                        "content": [
                            "في حالة وقوع حادث (مع أو بدون ضرر للمركبة)، سرقة المركبة أو أجزاء منها أو في حالة حدوث أي إصابات شخصية، يجب استخدام الإجراء التالي:",
                            "(١) يجب استدعاء الشرطة إلى مكان الحادث ويجب على المستأجر الإصرار على الحصول على تقرير الشرطة.",
                            "(٢) يجب على المستأجر تضمين جميع بيانات جميع الأطراف الأخرى بالإضافة إلى تفاصيل أي شهود من أجل استكمال تقرير الحادث المذكور.",
                            "(٣) لن يقبل المستأجر تحت أي من الظروف أي مطالبات من قبل أطراف ثالثة.",
                            "(٤) يلتزم المستأجر بمساعدة شركة Superior Car Rental و/أو شركة التأمين الخاصة بها في جميع المطالبات أو الشؤون القانونية المتعلقة بأي خسارة أو ضرر.",
                            "(٥) في حالة حدوث ضرر للمركبة، لن تتم المطالبة بأي إصلاح للمركبة دون موافقة مسبقة من شركة Superior Car Rental."
                        ]
                    },
                    "language": {
                        "title": "٢٥. اللغة",
                        "content": "في حالة وجود تعارض بين نص هذه الاتفاقية باللغة الإنجليزية ونص هذه الاتفاقية باللغة العربية أو أي ترجمة عربية أخرى وأي محكمة مختصة تقرر أن هذا النص العربي أو الترجمة سوف يسود، فمن المتفق عليه أن النص الإنجليزي لهذه الاتفاقية سوف يستخدم مع ذلك للمساعدة في أي تفسير."
                    }
                },
                "accept": "لقد قرأت ووافقت على شروط وأحكام تأجير السيارات",
                "error": "يرجى قبول الشروط والأحكام للمتابعة",
                "continue": "متابعة"
            }
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n; 