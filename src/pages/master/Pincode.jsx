// import React, { useState } from 'react';
// import logo from "../../../assets/images/logo.svg"
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';
// import { SimpleCard } from 'app/components'
// import { Button, Grid, Icon, styled, Box } from '@mui/material'
// import { Span } from 'app/components/Typography'
// import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
// import { LogoWithTitle } from 'app/components'
// import { GrozpSnackbar } from 'app/components/'
// // import { url } from 'app/constants'
// const Container = styled('div')(({ theme }) => ({
//     margin: '30px',
//     [theme.breakpoints.down('sm')]: { margin: '16px' },
//     '& .breadcrumb': {
//         marginBottom: '30px',
//         [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
//     },
// }))
// const TextField = styled(TextValidator)(() => ({
//     width: '100%',
//     marginBottom: '16px',
// }))
// const Pincode = () => {
//     const [state, setState] = useState('')
//     const [open, setOpen] = useState(false)
//     const [msg, setMsg] = useState('')
//     const [severity, setSeverity] = useState('success')
//     const { orderId } = state

//     const handleChange = (event) => {
//         event.persist()
//         setState({
//             ...state,
//             [event.target.name]: event.target.value,
//         })
//     }

//     const handleClose = (event, reason) => {
//         if (reason === 'clickaway') {
//             return
//         }
//         setOpen(false)
//     }

//     const handleShowSnackbar = (msg, type) => {
//         setOpen(true)
//         setMsg(msg)
//         setSeverity(type)
//     }
//     const handleSubmit = () => {
//         axios.get(`https://testapi.grozep.com/v1/in/orders/details?id=${orderId}`)
//             .then((response) => {
//                 if (response.data.status === true) {
//                     const data = response.data.data;
//                     const InvoiceId = data.invoiceId;
//                     const Name = data.name;
//                     const phoneno = data.phone;
//                     const Altphone = data.phoneAlt;
//                     const StorePhone = data.storePhone;
//                     const OrderDateTime = data.orderDateTime;
//                     const PaymentType = data.billingInfo.paymentType;
//                     const StoreAddress = data.storeAddress;
//                     const Orderitems = data.orderItem;
//                     console.log("order", Orderitems);
//                     const Address = data.address;
//                     const Gstin = data.gstNumber;
//                     const StoreName = data.headQuater;
//                     const DeliveryCharge = data.billingInfo.deliveryCharge;
//                     const PromoDiscount = data.billingInfo.promoDiscount;
//                     const LoyaltyPoints = data.billingInfo.loyaltyPoints;
//                     const ReturnAmount = data.billingInfo.returnPoint;
//                     const SubTotal = data.billingInfo.subTotal;
//                     const Total = data.billingInfo.itemTotal;
//                     const PayableTotal = data.billingInfo.grandTotal;
//                     const CompanyName = data.companyName;
//                     const printWindow = window.open('', '_blank');
//                     const invoiceContent = getInvoiceContent(Name, phoneno, Altphone, OrderDateTime, PaymentType, StoreAddress, Orderitems, InvoiceId, Address, Gstin, StoreName, DeliveryCharge, SubTotal, LoyaltyPoints, ReturnAmount, PromoDiscount, Total, PayableTotal, StorePhone, CompanyName); // Pass the data to the function
//                     printWindow.document.write(invoiceContent);

//                     setTimeout(() => {
//                         html2canvas(printWindow.document.body).then(canvas => {
//                             const imageData = canvas.toDataURL('image/png');

//                             const pdf = new jsPDF('p', 'mm', 'a4');
//                             pdf.addImage(imageData, 'PNG', 0, 0, pdf.internal.pageSize.width, pdf.internal.pageSize.height);

//                             pdf.save('invoice.pdf');

//                             printWindow.close();
//                         });
//                     }, 1000);
//                 }
//             })
//             .catch((error) => {
//                 handleShowSnackbar('Error fetching data', 'error');
//             });
//     };
//     const getInvoiceContent = (Name, phoneno, Altphone, OrderDateTime, PaymentType, StoreAddress, Orderitems, InvoiceId, Address, Gstin, StoreName, DeliveryCharge, SubTotal, LoyaltyPoints, ReturnAmount, PromoDiscount, Total, PayableTotal, StorePhone, CompanyName) => {
//         let orderItemsContent = '';

//         Orderitems.forEach((item, index) => {
//             orderItemsContent += `
//                 <tr>
//                     <td>${index + 1}</td>
//                     <td>${item.itemName}, ${item.size}</td>
//                     <td>${item.hsnCode}</td>
//                     <td>₹${item.mrp}</td>
//                     <td>${item.quantity}</td>
//                     <td>₹${item.beforeTax}</td>
//                     <td>${item.cgst}%</td>
//                     <td>${item.sgst}%</td>
//                     <td>${(item.quantity * item.price).toFixed(2)}</td>
//                 </tr>
//             `;
//         });
//         const totalLine = `
//             <tr style="border-top: 2px solid black; border-bottom: 2px solid black;">
//                 <td colspan="8">Total</td>
//                 <td>₹${Total}</td>
//             </tr>
//         `;

//         return `
//       <html>
//         <head>
//           <title>Print Invoice</title>
//           <style>
//           body {
//     font-family: Arial, sans-serif;
//     margin: 50px; /* Add padding/margin to the body */
//     border: 2px solid black; /* Add a border to the body */
//     padding-top:20px;
//     padding-bottom:20px;
//   }
//           .image{
//             text-align: center;
//             font-size: 20px;
//             font-weight: 600;
//           }
//           .invoice-details {
//             display: flex;
//             justify-content: space-between;
//             padding-left: 50px;
//             padding-right: 120px;
//             font-size: 20px;
//             font-weight: 600;
//           }
//           .invoice-details-footer {
//             display: flex;
//             justify-content: space-between;
//             padding-left: 30px;
//             padding-right: 55px;
//             font-size: 20px;
//             font-weight: 600;
//           }
//     
//           .left-content {
//             text-align: left;
//           }

//           .right-content {
//             text-align: right;
//           }
//           .right-content-footer {
//             text-align: center
//           }
//           .table {
//             width: 100%;
//             border-collapse: collapse;
//         }
//         .table th {
//             border-top: 2px solid black;
//             border-bottom: 2px solid black;
//         }
//         .table th, .table td {
//             padding: 8px;
//             text-align: center;
//         }
//         .divider{
//             border: 1px solid;
//             width: 129px;
//         }
//         .div_wrap{
//             display: flex;
//             justify-content: end;
//         }
//         .total_amount{
//             text-align: end;
//             padding-right: 32px;
//             padding-top: 10px;
//         }
//         .gst{
//             display: flex;
//             justify-content: end;
//             gap: 55px;
//             padding-right: 16px;
//             line-height: 0px;
//         }
//         .final_total{
//             display: flex;
//             justify-content: end;
//             gap: 60px;
//             padding-right: 17px;
//         }
//         .div_line{
//             border:1px solid;
//         }
//         .acc_details{
//             display: flex;
//             line-height: 0px;
//         }
//         .acc_details_total{
//             display: flex;
//             padding-left:30px
//         }
//         .details_heading{
//             width: 130px;
//             font-size: 16px;
//             font-weight: 700;
//         }
//         .acc_details_section{
//             padding-left: 30px; 
//             margin-top: 10px;
//             margin-bottom: 10px;
//         }
//         .gst-heading{
//             font-weight:bold;
//         }
//           </style>
//         </head>
//         <body>
//           <div class="image">
//             <img src=${logo} alt="logo"/>         
//             <p> GARHWA (Headquarter)</p>
//             <p>Sukhbana, Near Railway Crossing,</p>
//             <p>Garhwa, Jharkhand - 822114</p>
//             <p>GSTIN/NO : # 20GUAPS2411D1ZB</p>
//           </div>
//           <div class="invoice-details">
//           <div class="left-content">
//           <p> Bill No: 1</p>
//           <p> Date : </p>
//           <p> Buyer: </p>
//           </div>
//           <div class="right-content">
//            <p> Time :</p>
//           </div>
//         </div>
//         <div class="line"></div>
//                     <table class="table">
//                         <thead>
//                             <tr>
//                                 <th>Sl : No</th>
//                                 <th>Product name and size</th>
//                                 <th>HSN</th>
//                                 <th>GST</th>
//                                 <th>CGST</th>
//                                 <th>Qty</th>
//                                 <th>Rate</th>
//                                 <th>Disc Amt</th>
//                                 <th>Amount</th>
//                               
//                             </tr>
//                         </thead>
//                         <tbody>
//                             ${orderItemsContent}
//                         </tbody>
//                     </table>
//                     <div class="div_wrap">
//                     <div class="divider"></div>
//                     </div>
//                     <div>
//                     <div class="total_amount">
//                         ${Total}
//                     </div>

//                     <div class="gst">
//                         <p class="gst-heading"> CGST </p> 
//                         <p> 200.00 </p>
//                     </div>
//                     <div class="gst">
//                         <p class="gst-heading"> SGST </p> 
//                         <p> 200.00 </p>
//                     </div>
//                     <div class="div_line"></div>
//                     <div class="final_total">
//                     <p> Total </p>
//                     <p> 8Nos </p>
//                     <p> 900.00</p>
//                     </div>
//                     <div class="div_line"></div>
//                     <div class="acc_details_section">
//                     <div class="acc_details">
//                     <p class="details_heading">Gift Voucher </p><p>: 30.00</p>
//                     </div>
//                     <div class="acc_details">
//                     <p class="details_heading">Cr/Dr Card </p><p>: 30.00</p>
//                     </div>
//                     <div class="acc_details">
//                     <p class="details_heading">Card No </p><p>: xxxx xxxx xxxx9325</p>
//                     </div>
//                     <div class="acc_details">
//                     <p class="details_heading">Cheque </p><p>: 30.00</p>
//                     </div>
//                     <div class="acc_details">
//                     <p class="details_heading">Cheque No </p><p>: 123545 Bankof Baroda</p>
//                     </div>
//                     <div class="acc_details">
//                     <p class="details_heading">Cash </p><p>: 2570.00</p>
//                     </div>
//                     <div class="acc_details">
//                     <p class="details_heading">Cash Tendered </p><p>: 30.00</p>
//                     </div>
//                     <div class="acc_details">
//                     <p class="details_heading">Balance </p><p>: 30.00</p>
//                     </div>
//                     </div>
//                     <div class="div_line"></div>
//                     <div class="acc_details_total">
//                     <p class="details_heading">Total Paid</p><p>: 30.00</p>
//                      </div>
//                      <div class="div_line"></div>
//                      <div class="invoice-details-footer">
//                      <div class="left-content">
//                      <p>Thank You!</p>
//                      <p>Visit Again!</p>
//                      </div>
//                      <div class="right-content-footer">
//                     <p> Authorised Signature</p>
//                     <p>For M/s Buy4Earn Private Limited</p>
//                      </div>
//                      </div>

//           <script>
//             window.onafterprint = function () {
//               window.close();
//             };
//           </script>
//         </body>
//       </html>
//     `;
//     };

//     return (
//         <Container>
//             <LogoWithTitle
//                 src="/assets/Orders/invoice.png"
//                 title="Print Bill "
//             />
//             <GrozpSnackbar
//                 open={open}
//                 handleClose={handleClose}
//                 msg={msg}
//                 severity={severity}
//             />
//             <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
//                 <SimpleCard title="Print Invoice ">
//                     <Box overflow="auto">
//                         <Grid container spacing={6}>
//                             <Grid
//                                 item
//                                 lg={6}
//                                 md={6}
//                                 sm={12}
//                                 xs={12}
//                                 sx={{ mt: 2 }}
//                             >
//                                 <TextField
//                                     type="number"
//                                     name="orderId"
//                                     id="standard-basic"
//                                     value={orderId || ''}
//                                     onChange={handleChange}
//                                     errorMessages={['this field is required']}
//                                     label="Order ID(Ex:123)"
//                                     validators={[
//                                         'required',
//                                         'minStringLength: 1',
//                                     ]}
//                                     inputProps={{ min: '0' }}
//                                 />
//                             </Grid>
//                         </Grid>
//                     </Box>
//                     <Button color="primary" variant="contained" type="submit">
//                         <Icon>send</Icon>
//                         <Span
//                             sx={{
//                                 pl: 1,
//                                 textTransform: 'capitalize',
//                             }}
//                         >
//                             Submit
//                         </Span>
//                     </Button>
//                 </SimpleCard>
//             </ValidatorForm>
//         </Container>
//     );
// };

// export default Pincode;

