const chayCaytrongData = [
  {
    id: '1',
    name: 'Planta Trắng',
    image:
      'https://s3-alpha-sig.figma.com/img/2513/c966/834221fbc31c808dfbb9ba52ad5ef5e4?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i7rkIAHYIPjvkiskrRsXwKCoD35KjWNBv4411fD0TRjs-kDTUxx9aaC2YZzFYLToFy4~TXf~deiv0kJTuDqvkdgHqxidJ4JlakJTe41lQvub68KQ1opWQHykRG1Ka~6gKEJE6yEFvdHzgwaxJzZQ4MVrEmFvP-perQ8ustGBMnGZ~qrK0gK5ah9JGzilCtVwOINqO2EK9vpwZepE3gqGydko36egzSx4g0shFSRxVmHrPi3aHGfKZolPFDP3G6vvJa1tkcGEF5w1orfjH1qqYEvIvcmrk7ef2td4hZS~3yNswfN8l5VE-3A3vDGHKYqlmF5Ha-a0QBoHYt3H20Xheg__',
    price: '250000',
    category: 'Chậu cây trồng',
    remaining: '10sp',
  },
  {
    id: '2',
    name: 'Planta Lemon Balm',
    image:
      'https://s3-alpha-sig.figma.com/img/740c/be92/30d0e9ed9212eaa46291bb0045a45840?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kkxDK40~oH0p7ogmfTmoZb8dTkBTvcCjOccry5B0qgBJZwsF1Ek16Yr5Er6AJKgLC40UWfrbshc~0Zlhi-BqXc8bPbjqr3rLrusgRVmJK9pEoaw~qUdqSNieqygRp1Kj9nxIwx7KDznxaL8CL3LAbPc1n50LhD63VxTxMlC4KTtiBE6POf7ORDwJHucK2aYfaCAxK4F-Ohkf41XHtgBGOSpwUBX9LfulrPCNiG~J0NAiVFiMMlL5v-QKk8SN69ohoiDqAux7rwy~Rm-7WG59-KJm6jK5PQxXBRnOViEIl-mDcTS0ji6bVx18q~GbNpV7ztSBHFd~PVAsYhjyGTrRSg__',
    price: '250000',
    category: 'Chậu cây trồng',
    remaining: '10sp',
  },
  {
    id: '3',
    name: 'Planta Rosewood',
    image:
      'https://s3-alpha-sig.figma.com/img/ff1e/1ba8/1d4b4a5e1f83ad7d7c6a746d9c7677b8?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lOOievS7LV5G-dAwoJ7ZnvTGLRJwqqp0Z0Xc3rvKJT111kHqCZUKHLyZj80dnWq-U~gRZ~rmr4yLPNAjmE89ZN6JsQY43upQQXb9waYjL17UwNdh-i0tBz0wvNy07sgeSvbPIJ5Kc048s8HlGjJt76PbVxvgd9XbEi9uYu8tE8CNERbrFcoWRUXgbe~q601X5LEozFJk5-OoC3GaMThRdNbz-ni4Rr-YZF~nCDz-ZJQV3ppaLibGudlYOZtwy7Zt-Vik8NVH7XC9XqOqTZcQkeCebHTNZ-keabihvmRCn2-jtLvNp95qYpF0jlOOxoUyUmSBfvNt46R2hx754dFTcA__',
    price: '250000',
    category: 'Chậu cây trồng',
    remaining: '10sp',
  },
  {
    id: '4',
    name: 'Planta Dove Grey',
    image:
      'https://s3-alpha-sig.figma.com/img/bfe9/b5e0/6bcc9eb160347c1e1dc9c9c768361182?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gpIAjPR-01wVUuAoNUpwZROAbWmfOPOjZ5jkPPV8Qnq0fI18bAvc-~YOxtMK8TtRxBuhRNpAcVe7iDYaAdAhIR0VsCyaPOCS4-zPElh55CP764JBTqnDLykcsG~GIGGXB5Lbk3hDw1F2Lb8XQTQsLauVxvVH3wLJh2gCGSAok2eRQBM-Xi6xY22iO2qvIqU-nVtCdb1GZkhl7Y9S8qBvvENhqkxY34WK1rPT2h1UNB34eCcS9iVRD7HUbs1isjcykJHc7YZGd6meGm-bnlcUBGjHrHr1~8DZFgB8BYc6UmGWg-XCDdaqdAUIVptAWJhOREmLfQ1FzDvfMY9zDROE9w__',
    price: '250000',
    category: 'Chậu cây trồng',
    remaining: '10sp',
  },
  {
    id: '5',
    name: 'Planta Đen',
    image:
      'https://s3-alpha-sig.figma.com/img/6e83/71fd/b81a241b896b62ccc6fe11d8318bc8ad?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IFmq3B15zIslTttTJwoaE6esP0VoMRbjYX~zYwZXj7ooJ4XVsuPgaEDul3GHcrAHF0i9qdQHk5ahvc-QB9U8VXHg2rqectCVSOlLK9CRTfpgwIqKjGS6c-zTKDs-AzysZh~RPtco50fC8WpYtdbekk3p6mu02Iee19vkej1fLVyLcmDD81jSJyiatoFnIIFUgOk4r-gMB2694wx9v7kJetiBPJo7O4aa4GPNGE8HnWCH7e-JqivHY-46fFYLp5C4aaU~PkVY-EHpndpcx3K4-3SblIzP1andkNz0yUTkGe2CbnrCssZNvUw8M8RNFD~hNEyllGaIPns5MDkTePik6g__',
    price: '250000',
    category: 'Chậu cây trồng',
    remaining: '10sp',
  },
];
export default chayCaytrongData;