/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    

   
  ],
  theme: {
    extend: {},
    fontFamily: {

      
       'display': ['Poppins'],
      'body': ["Open Sans"],
     }
  },
  plugins: [

    require('tailwind-scrollbar')({ nocompatible: true })
   
   
  ]
  
}