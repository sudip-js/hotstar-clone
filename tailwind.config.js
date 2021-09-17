
module.exports = {
  
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, 
    theme: {
      extend: {
     
        fontFamily:{
          roboto:"'Roboto',sans-serif"
        },
        colors: {
          headerColor: "#121926",
          subscribe_btn:"#1f80e0",
          background_color:"#0c111b",
          banner_color:"#334366",
          text_color:"#F9F9F9",
          facebook_color:"#4285F4",
          google_color:"#DB4437",
          bg_gradiant1:" #030B17",
        
         
         
      },
      height:{
        h1:"388px",
        h2:"392px",
        h3:"396px",
        h4:"562px",
        h41:"800px",
        h42:"900px",
      },
      inset:{
        i1:"21rem",
        i2:"22rem",
        i3:"23rem",
      },
      width:{
        w6:"600px",
        w61:"620px",
        w7:"650px",
      },
    
    },
    variants: {
      extend: {
        backgroundColor: ['active'],
      },
    },
    plugins: [
      require('tailwind-scrollbar-hide')
    ]
  }
}