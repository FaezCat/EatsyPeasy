import { Fragment } from "react";
import SingleResult from "./SingleResult";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

export default function Results(props) {

  const navigate = useNavigate();

  return (
    <Fragment>
      <div className="page-number-display">
        4 of 4
      </div>
      <h1>Your Customized Selections</h1>
      <div>
        <SingleResult itemData={itemData} defaultValue={0}/>
        <SingleResult itemData={itemData} defaultValue={1}/>
        <SingleResult itemData={itemData} defaultValue={2}/>
      </div>
      <h3>Need some input? Generate a poll to share with your friends!</h3>
      
 {/* TO DO: Button */}
      {/* <Button 
          style={{backgroundColor: "#0198E1", fontFamily: 'Quicksand, sans-serif'}} variant="contained" 
          onClick={() => {props.clickHandler(""); navigate('/poll'); console.log("");}}>Generate Poll
      </Button> */}
      
    </Fragment>
 )
}

const itemData =[
  {
     "business_status" : "OPERATIONAL",
     "formatted_address" : "965 Hornby St, Vancouver, BC V6Z 3G5, Canada",
     "geometry" : {
        "location" : {
           "lat" : 49.2810207,
           "lng" : -123.1247524
        },
        "viewport" : {
           "northeast" : {
              "lat" : 49.28229987989272,
              "lng" : -123.1232716201073
           },
           "southwest" : {
              "lat" : 49.27960022010728,
              "lng" : -123.1259712798927
           }
        }
     },
     "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
     "icon_background_color" : "#FF9E67",
     "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
     "name" : "Shizenya",
     "opening_hours" : {
        "open_now" : true
     },
     "photos" : [
        {
           "height" : 3024,
           "html_attributions" : [
              "\u003ca href=\"https://maps.google.com/maps/contrib/104422288212949352575\"\u003eA GL\u003c/a\u003e"
           ],
           "photo_reference" : "Aap_uEDlCZKPirhiGrGIrXKgC0fgjxiw3CDW-G3f-AJBR36OU31DW4laPxtjYQ9LEw9w93K4bT8pD2pAFY0515b2xghmxTYnZNrVHSmt1aoIdtDJSCQTaVnc6vhRez6jPFQvobLqEgrVk854VOh_CKHVHEq-GS8DGhxhhQi7XmzO9jlhrkjO",
           "width" : 4032
        }
     ],
     "place_id" : "ChIJ3WSkQdVzhlQRf-936T0TOv0",
     "plus_code" : {
        "compound_code" : "7VJG+C3 Vancouver, British Columbia",
        "global_code" : "84XR7VJG+C3"
     },
     "price_level" : 2,
     "rating" : 4.4,
     "reference" : "ChIJ3WSkQdVzhlQRf-936T0TOv0",
     "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
     "user_ratings_total" : 817
  },
  {
     "business_status" : "OPERATIONAL",
     "formatted_address" : "508 Davie St, Vancouver, BC V6B 3N9, Canada",
     "geometry" : {
        "location" : {
           "lat" : 49.2759077,
           "lng" : -123.124628
        },
        "viewport" : {
           "northeast" : {
              "lat" : 49.27732382989272,
              "lng" : -123.1232030701073
           },
           "southwest" : {
              "lat" : 49.27462417010727,
              "lng" : -123.1259027298928
           }
        }
     },
     "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
     "icon_background_color" : "#FF9E67",
     "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
     "name" : "Nuba in Yaletown",
     "opening_hours" : {
        "open_now" : true
     },
     "photos" : [
        {
           "height" : 641,
           "html_attributions" : [
              "\u003ca href=\"https://maps.google.com/maps/contrib/114331906967877873136\"\u003eNuba Café in Yaletown\u003c/a\u003e"
           ],
           "photo_reference" : "Aap_uEBoyJOqgUv6tPKPVUEwhVV1n9YD88ul8VtQFYx3QO2TZQuK3pndhIDNikIPttynMSfLJpe5mWUzh_frVyQKOE8OO8fF4GM2i2tn4Tvg6TGDxVkNwjrLQ5ABRlJyeEOwk54mSK047yF1EzWDQ8AHvEOlhgwSi7giG7myfGywsWog4u-1",
           "width" : 960
        }
     ],
     "place_id" : "ChIJZZP6HNRzhlQRTgKreAfu7O4",
     "plus_code" : {
        "compound_code" : "7VGG+94 Vancouver, British Columbia",
        "global_code" : "84XR7VGG+94"
     },
     "price_level" : 2,
     "rating" : 4.3,
     "reference" : "ChIJZZP6HNRzhlQRTgKreAfu7O4",
     "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
     "user_ratings_total" : 1045
  },
  {
     "business_status" : "OPERATIONAL",
     "formatted_address" : "782 Cambie St, Vancouver, BC V6B 2R5, Canada",
     "geometry" : {
        "location" : {
           "lat" : 49.2784786,
           "lng" : -123.1143514
        },
        "viewport" : {
           "northeast" : {
              "lat" : 49.27985907989272,
              "lng" : -123.1130537201073
           },
           "southwest" : {
              "lat" : 49.27715942010727,
              "lng" : -123.1157533798927
           }
        }
     },
     "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
     "icon_background_color" : "#FF9E67",
     "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
     "name" : "Black Rice Izakaya",
     "opening_hours" : {
        "open_now" : false
     },
     "photos" : [
        {
           "height" : 3024,
           "html_attributions" : [
              "\u003ca href=\"https://maps.google.com/maps/contrib/116183815592287342140\"\u003eSophie Morgan\u003c/a\u003e"
           ],
           "photo_reference" : "Aap_uECNTzrhQ1haCEomlp14k9h3wyTSPGw30ERkeJRuKhsh68OJiXVu-qTzHhoPzLAcqzHgj3jnaLS8-0Oo5DW5nZqDZE6dQnQwveGPc5Ju5CuSx4xQtDSjTXxj7VAeaRT5WGXNwTPc3vWrocvBNL83nmDRkN9aj0KjHuTPRL2cWelgMbQJ",
           "width" : 4032
        }
     ],
     "place_id" : "ChIJI9CkNHxxhlQRuzDATf6_GeI",
     "plus_code" : {
        "compound_code" : "7VHP+97 Vancouver, British Columbia",
        "global_code" : "84XR7VHP+97"
     },
     "price_level" : 2,
     "rating" : 4.2,
     "reference" : "ChIJI9CkNHxxhlQRuzDATf6_GeI",
     "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
     "user_ratings_total" : 727
  },
  {
     "business_status" : "OPERATIONAL",
     "formatted_address" : "422 Richards St, Vancouver, BC V6B 2Z4, Canada",
     "geometry" : {
        "location" : {
           "lat" : 49.2837143,
           "lng" : -123.1121685
        },
        "viewport" : {
           "northeast" : {
              "lat" : 49.28507217989272,
              "lng" : -123.1109051201072
           },
           "southwest" : {
              "lat" : 49.28237252010727,
              "lng" : -123.1136047798927
           }
        }
     },
     "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
     "icon_background_color" : "#FF9E67",
     "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
     "name" : "Vegan Pudding & Co.",
     "opening_hours" : {
        "open_now" : false
     },
     "photos" : [
        {
           "height" : 3456,
           "html_attributions" : [
              "\u003ca href=\"https://maps.google.com/maps/contrib/104463574283515904085\"\u003eVegan Pudding &amp; Co.\u003c/a\u003e"
           ],
           "photo_reference" : "Aap_uEBtTufi43Ukpy2yhqVH2CdlxA745lzNmNc8AEVE8Ky2IoK34G0Yl0nAwWGVTQH2f-k8UcdtFoRRmPhBtkxp5sCO98yLCbNy1pAwrOCx9YcUpnwdaRWm0k-w0siGr3oeMv3iIUS1jFAdz4l8vBMwxJYLpWABlRK3INyBo2JnZDIQIIVe",
           "width" : 5184
        }
     ],
     "place_id" : "ChIJHUAS-XhxhlQRtw-z2jbNuqQ",
     "plus_code" : {
        "compound_code" : "7VMQ+F4 Vancouver, British Columbia",
        "global_code" : "84XR7VMQ+F4"
     },
     "price_level" : 2,
     "rating" : 4.6,
     "reference" : "ChIJHUAS-XhxhlQRtw-z2jbNuqQ",
     "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
     "user_ratings_total" : 124
  },
  {
     "business_status" : "OPERATIONAL",
     "formatted_address" : "541 Robson St, Vancouver, BC V6B 2B7, Canada",
     "geometry" : {
        "location" : {
           "lat" : 49.2803128,
           "lng" : -123.117931
        },
        "viewport" : {
           "northeast" : {
              "lat" : 49.28161532989272,
              "lng" : -123.1166432201073
           },
           "southwest" : {
              "lat" : 49.27891567010728,
              "lng" : -123.1193428798927
           }
        }
     },
     "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
     "icon_background_color" : "#FF9E67",
     "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
     "name" : "JINYA Ramen Bar - Vancouver",
     "opening_hours" : {
        "open_now" : true
     },
     "photos" : [
        {
           "height" : 874,
           "html_attributions" : [
              "\u003ca href=\"https://maps.google.com/maps/contrib/112948079770038316283\"\u003eA Google User\u003c/a\u003e"
           ],
           "photo_reference" : "Aap_uEC49Bu6QXpl8ZMB33LhkXRqRglSWcB5GCh-CuEFyHCBMJsLTHVf7Kc6fC9S7BMr9ucNWjFfJPzCtCqPNuf9hQVAjAQV9jJXmLsXL21NO-oa7Z7-dhFi2lmJrzfB-fVdzV_iHwL1uI3Y2I8agsST52djV8-navkI5Cxz5c8WQOhat-SL",
           "width" : 1171
        }
     ],
     "place_id" : "ChIJ4dRcUH5xhlQREcvYYxzhqv0",
     "plus_code" : {
        "compound_code" : "7VJJ+4R Vancouver, British Columbia",
        "global_code" : "84XR7VJJ+4R"
     },
     "price_level" : 2,
     "rating" : 4.3,
     "reference" : "ChIJ4dRcUH5xhlQREcvYYxzhqv0",
     "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
     "user_ratings_total" : 3091
  },
  {
     "business_status" : "OPERATIONAL",
     "formatted_address" : "200 Granville St #70, Vancouver, BC V6C 1S4, Canada",
     "geometry" : {
        "location" : {
           "lat" : 49.2869066,
           "lng" : -123.1127618
        },
        "viewport" : {
           "northeast" : {
              "lat" : 49.28781202989272,
              "lng" : -123.1105061
           },
           "southwest" : {
              "lat" : 49.28511237010728,
              "lng" : -123.1149341
           }
        }
     },
     "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
     "icon_background_color" : "#FF9E67",
     "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
     "name" : "Miku Vancouver",
     "opening_hours" : {
        "open_now" : true
     },
     "photos" : [
        {
           "height" : 3000,
           "html_attributions" : [
              "\u003ca href=\"https://maps.google.com/maps/contrib/112522652111081115200\"\u003ejbyun.sfu\u003c/a\u003e"
           ],
           "photo_reference" : "Aap_uEBZ07uzghXOJQIMETo8RRRodrQr0Cl2AxCRepWFUSfauqc4xvh9B8yuoSiqDLaDWc513Ty2cBaSp5u7g0WFb5A9ms1gjXeRrgmFYIS-G1fWbpCA1OKgkA8HpQX-KycwkQ1qjI5QOL23Gqy_Kg7F3Mn-_IqUHvczTPSzFUNsp12OQ7xV",
           "width" : 4000
        }
     ],
     "place_id" : "ChIJlyu4u4NxhlQRkUpN_iFwl8Q",
     "plus_code" : {
        "compound_code" : "7VPP+QV Vancouver, British Columbia",
        "global_code" : "84XR7VPP+QV"
     },
     "price_level" : 3,
     "rating" : 4.5,
     "reference" : "ChIJlyu4u4NxhlQRkUpN_iFwl8Q",
     "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
     "user_ratings_total" : 5047
  }
]
