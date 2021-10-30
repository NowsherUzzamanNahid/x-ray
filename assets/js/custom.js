$(document).ready(function() {

var lurl = "https://www.1smartrecruiter.com/";

// adding views on index page


// saved search count function
$(".btn-generator").on("click",function()
{
$.ajax({  
url: lurl + 'php/stgonly.php',  
  success: function(data) {  
   // $("#para").html(data);                
  }  
});  
});  

//campuri
function hasWhiteSpace(s) {
  return s.indexOf(' ') >= 0;
}

// values for dropdown
  var isoCountries = [
  { id: 'All', text: 'All Countries'},
    { id: 'RO', text: 'Romania'},
  { id: 'UK', text: 'United Kingdom'},
                { id: 'US', text: 'United States'},
				 { id: 'AF', text: 'Afghanistan'},
                { id: 'AX', text: 'Aland Islands'},
                { id: 'AL', text: 'Albania'},
                { id: 'DZ', text: 'Algeria'},
                { id: 'AS', text: 'American Samoa'},
                { id: 'AD', text: 'Andorra'},
                { id: 'AO', text: 'Angola'},
                { id: 'AI', text: 'Anguilla'},
                { id: 'AQ', text: 'Antarctica'},
                { id: 'AG', text: 'Antigua And Barbuda'},
                { id: 'AR', text: 'Argentina'},
                { id: 'AM', text: 'Armenia'},
                { id: 'AW', text: 'Aruba'},
                { id: 'AU', text: 'Australia'},
                { id: 'AT', text: 'Austria'},
                { id: 'AZ', text: 'Azerbaijan'},
                { id: 'BS', text: 'Bahamas'},
                { id: 'BH', text: 'Bahrain'},
                { id: 'BD', text: 'Bangladesh'},
                { id: 'BB', text: 'Barbados'},
                { id: 'BY', text: 'Belarus'},
                { id: 'BE', text: 'Belgium'},
                { id: 'BZ', text: 'Belize'},
                { id: 'BJ', text: 'Benin'},
                { id: 'BM', text: 'Bermuda'},
                { id: 'BT', text: 'Bhutan'},
                { id: 'BO', text: 'Bolivia'},
                { id: 'BA', text: 'Bosnia And Herzegovina'},
                { id: 'BW', text: 'Botswana'},
                { id: 'BR', text: 'Brazil'},
                { id: 'IO', text: 'British Indian Ocean Territory'},
                { id: 'BN', text: 'Brunei Darussalam'},
                { id: 'BG', text: 'Bulgaria'},
                { id: 'BF', text: 'Burkina Faso'},
                { id: 'BI', text: 'Burundi'},
                { id: 'KH', text: 'Cambodia'},
                { id: 'CM', text: 'Cameroon'},
				{ id: 'CA', text: 'Canada'},
               { id: 'CV', text: 'Cape Verde'},
			   { id: 'CB', text: 'Caribbean Nations'},
                { id: 'KY', text: 'Cayman Islands'},
                { id: 'CF', text: 'Central African Republic'},
                { id: 'TD', text: 'Chad'},
                { id: 'CL', text: 'Chile'},
                { id: 'CN', text: 'China'},
                { id: 'CX', text: 'Christmas Island'},
                { id: 'CC', text: 'Cocos (Keeling) Islands'},
                { id: 'CO', text: 'Colombia'},
                { id: 'KM', text: 'Comoros'},
                { id: 'CG', text: 'Congo'},
                { id: 'CD', text: 'Congo, Democratic Republic'},
                { id: 'CK', text: 'Cook Islands'},
                { id: 'CR', text: 'Costa Rica'},
                { id: 'CI', text: 'Cote D\'Ivoire'},
                { id: 'HR', text: 'Croatia'},
                { id: 'CU', text: 'Cuba'},
                { id: 'CY', text: 'Cyprus'},
                { id: 'CZ', text: 'Czech Republic'},
                { id: 'DK', text: 'Denmark'},
                { id: 'DJ', text: 'Djibouti'},
                { id: 'DM', text: 'Dominica'},
                { id: 'DO', text: 'Dominican Republic'},
				{ id: 'TP', text: 'East Timor'},
                { id: 'EC', text: 'Ecuador'},
                { id: 'EG', text: 'Egypt'},
                { id: 'SV', text: 'El Salvador'},
                { id: 'GQ', text: 'Equatorial Guinea'},
                { id: 'ER', text: 'Eritrea'},
                { id: 'EE', text: 'Estonia'},
                { id: 'ET', text: 'Ethiopia'},
                { id: 'FK', text: 'Falkland Islands (Malvinas)'},
                { id: 'FO', text: 'Faroe Islands'},
				{ id: 'FM', text: 'Federated States of Micronesia'},
                { id: 'FJ', text: 'Fiji'},
                { id: 'FI', text: 'Finland'},
                { id: 'FR', text: 'France'},
                { id: 'GF', text: 'French Guiana'},
                { id: 'PF', text: 'French Polynesia'},
                { id: 'TF', text: 'French Southern Territories'},
                { id: 'GA', text: 'Gabon'},
                { id: 'GM', text: 'Gambia'},
                { id: 'GE', text: 'Georgia'},
                { id: 'DE', text: 'Germany'},
                { id: 'GH', text: 'Ghana'},
                { id: 'GI', text: 'Gibraltar'},
                { id: 'GR', text: 'Greece'},
                { id: 'GL', text: 'Greenland'},
                { id: 'GD', text: 'Grenada'},
                { id: 'GP', text: 'Guadeloupe'},
                { id: 'GU', text: 'Guam'},
                { id: 'GT', text: 'Guatemala'},
                { id: 'GG', text: 'Guernsey'},
                { id: 'GN', text: 'Guinea'},
                { id: 'GW', text: 'Guinea-Bissau'},
                { id: 'GY', text: 'Guyana'},
                { id: 'HT', text: 'Haiti'},
                { id: 'VA', text: 'Holy See (Vatican City State)'},
                { id: 'HN', text: 'Honduras'},
                { id: 'HK', text: 'Hong Kong'},
                { id: 'HU', text: 'Hungary'},
                { id: 'IS', text: 'Iceland'},
                { id: 'IN', text: 'India'},
                { id: 'ID', text: 'Indonesia'},
                { id: 'IR', text: 'Iran'},
                { id: 'IQ', text: 'Iraq'},
                { id: 'IE', text: 'Ireland'},
                { id: 'IM', text: 'Isle Of Man'},
                { id: 'IL', text: 'Israel'},
                { id: 'IT', text: 'Italy'},
                { id: 'JM', text: 'Jamaica'},
                { id: 'JP', text: 'Japan'},
                { id: 'JE', text: 'Jersey'},
                { id: 'JO', text: 'Jordan'},
                { id: 'KZ', text: 'Kazakhstan'},
                { id: 'KE', text: 'Kenya'},
                { id: 'KI', text: 'Kiribati'},
                { id: 'KR', text: 'Korea'},
				{ id: 'KP', text: 'Korea (North)'},
                { id: 'KW', text: 'Kuwait'},
                { id: 'KG', text: 'Kyrgyzstan'},
                { id: 'LA', text: 'Laos'},
                { id: 'LV', text: 'Latvia'},
                { id: 'LB', text: 'Lebanon'},
                { id: 'LS', text: 'Lesotho'},
                { id: 'LR', text: 'Liberia'},
                { id: 'LY', text: 'Libya'},
                { id: 'LI', text: 'Liechtenstein'},
                { id: 'LT', text: 'Lithuania'},
                { id: 'LU', text: 'Luxembourg'},
                { id: 'MO', text: 'Macao'},
                { id: 'MK', text: 'Macedonia'},
                { id: 'MG', text: 'Madagascar'},
                { id: 'MW', text: 'Malawi'},
                { id: 'MY', text: 'Malaysia'},
                { id: 'MV', text: 'Maldives'},
                { id: 'ML', text: 'Mali'},
                { id: 'MT', text: 'Malta'},
                { id: 'MH', text: 'Marshall Islands'},
                { id: 'MQ', text: 'Martinique'},
                { id: 'MR', text: 'Mauritania'},
                { id: 'MU', text: 'Mauritius'},
                { id: 'YT', text: 'Mayotte'},
                { id: 'MX', text: 'Mexico'},
                { id: 'MD', text: 'Moldova'},
                { id: 'MC', text: 'Monaco'},
                { id: 'MN', text: 'Mongolia'},
                { id: 'ME', text: 'Montenegro'},
                { id: 'MS', text: 'Montserrat'},
                { id: 'MA', text: 'Morocco'},
                { id: 'MZ', text: 'Mozambique'},
                { id: 'MM', text: 'Myanmar'},
                { id: 'NA', text: 'Namibia'},
                { id: 'NR', text: 'Nauru'},
                { id: 'NP', text: 'Nepal'},
                { id: 'NL', text: 'Netherlands'},
                { id: 'AN', text: 'Netherlands Antilles'},
                { id: 'NC', text: 'New Caledonia'},
                { id: 'NZ', text: 'New Zealand'},
                { id: 'NI', text: 'Nicaragua'},
                { id: 'NE', text: 'Niger'},
                { id: 'NG', text: 'Nigeria'},
                { id: 'NU', text: 'Niue'},
                { id: 'NF', text: 'Norfolk Island'},
                { id: 'MP', text: 'Northern Mariana Islands'},
                { id: 'NO', text: 'Norway'},
                { id: 'OM', text: 'Oman'},
                { id: 'PK', text: 'Pakistan'},
                { id: 'PW', text: 'Palau'},
                { id: 'PS', text: 'Palestinian Territory'},
                { id: 'PA', text: 'Panama'},
                { id: 'PG', text: 'Papua New Guinea'},
                { id: 'PY', text: 'Paraguay'},
                { id: 'PE', text: 'Peru'},
                { id: 'PH', text: 'Philippines'},
                { id: 'PN', text: 'Pitcairn'},
                { id: 'PL', text: 'Poland'},
                { id: 'PT', text: 'Portugal'},
                { id: 'PR', text: 'Puerto Rico'},
                { id: 'QA', text: 'Qatar'},
                { id: 'RE', text: 'Reunion'},
                { id: 'RU', text: 'Russian Federation'},
                { id: 'RW', text: 'Rwanda'},
                { id: 'SH', text: 'Saint Helena'},
                { id: 'KN', text: 'Saint Kitts And Nevis'},
                { id: 'LC', text: 'Saint Lucia'},
                { id: 'PM', text: 'Saint Pierre And Miquelon'},
                { id: 'VC', text: 'Saint Vincent And Grenadines'},
                { id: 'WS', text: 'Samoa'},
                { id: 'SM', text: 'San Marino'},
                { id: 'ST', text: 'Sao Tome And Principe'},
                { id: 'SA', text: 'Saudi Arabia'},
                { id: 'SN', text: 'Senegal'},
                { id: 'RS', text: 'Serbia'},
                { id: 'SC', text: 'Seychelles'},
                { id: 'SL', text: 'Sierra Leone'},
                { id: 'SG', text: 'Singapore'},
                { id: 'SK', text: 'Slovakia'},
                { id: 'SI', text: 'Slovenia'},
                { id: 'SB', text: 'Solomon Islands'},
                { id: 'SO', text: 'Somalia'},
                { id: 'ZA', text: 'South Africa'},
                { id: 'ES', text: 'Spain'},
                { id: 'LK', text: 'Sri Lanka'},
                { id: 'SD', text: 'Sudan'},
                { id: 'SR', text: 'Suriname'},
                { id: 'SJ', text: 'Svalbard And Jan Mayen'},
                { id: 'SZ', text: 'Swaziland'},
                { id: 'SE', text: 'Sweden'},
                { id: 'CH', text: 'Switzerland'},
                { id: 'SY', text: 'Syria'},
                { id: 'TW', text: 'Taiwan'},
                { id: 'TJ', text: 'Tajikistan'},
                { id: 'TZ', text: 'Tanzania'},
                { id: 'TH', text: 'Thailand'},
                { id: 'TL', text: 'Timor-Leste'},
                { id: 'TG', text: 'Togo'},
                { id: 'TK', text: 'Tokelau'},
                { id: 'TO', text: 'Tonga'},
                { id: 'TT', text: 'Trinidad And Tobago'},
                { id: 'TN', text: 'Tunisia'},
                { id: 'TR', text: 'Turkey'},
                { id: 'TM', text: 'Turkmenistan'},
                { id: 'TC', text: 'Turks And Caicos Islands'},
                { id: 'TV', text: 'Tuvalu'},
                { id: 'UG', text: 'Uganda'},
                { id: 'UA', text: 'Ukraine'},
                { id: 'AE', text: 'United Arab Emirates'},
                { id: 'UY', text: 'Uruguay'},
                { id: 'UZ', text: 'Uzbekistan'},
                { id: 'VU', text: 'Vanuatu'},
				 { id: 'VA', text: 'Vatican City State (Holy See)'},
                { id: 'VE', text: 'Venezuela'},
                { id: 'VN', text: 'VietNam'},
                { id: 'VG', text: 'Virgin Islands (British)'},
                { id: 'VI', text: 'Virgin Islands (U.S.)'},
                { id: 'WF', text: 'Wallis And Futuna'},
                { id: 'EH', text: 'Western Sahara'},
                { id: 'YE', text: 'Yemen'},
                { id: 'ZM', text: 'Zambia'},
                { id: 'ZW', text: 'Zimbabwe'}
            ];
          
  function formatCountry (country) {
              if (!country.id) { return country.text; }
              var $country = $(
                '<span class="flag flag-'+ country.id.toLowerCase() +'"></span>' +
                '<span class="flag-text">'+ country.text+"</span>"
              );
              return $country;
            };
            
            //Assuming you have a select element with name country
            // e.g. <select name="name"></select>
            
            $("[name='select-industry']").select2({
                placeholder: "Select a country",
				templateResult: formatCountry,
                data: isoCountries,
				 matcher: matchCustom
            });
            

//click off only cvs hide values
//values with "" on 4th field

function getP(){    
  var k1 = $('#keyword_1').val().toLowerCase();
  var k2 = $('#keyword_2').val().toLowerCase();
  var k3 = $('#keyword_3').val().toLowerCase();
  //var k4 = $('#keyword_4').val().toLowerCase();

  var k5 = $('#keyword_5').val().toLowerCase();
  var k6 = $('#keyword_6').val().toLowerCase();

  var s1 = $('#synon_1').val().toLowerCase();
  var s2 = $('#synon_2').val().toLowerCase();
  var s3 = $('#synon_3').val().toLowerCase();
  //var s4 = $('#synon_4').val().toLowerCase();

  var s5 = $('#synon_5').val().toLowerCase();
  var s6 = $('#synon_6').val().toLowerCase();

  var cvs_check = $('#cvs').val();



  var flk1 = '';
  var flk2 = '';
  var flk3 = '';
  var flk4 = '';
  var flk5 = '';
  var flk6 = '';
  var flk7 = '';
  var cvsval = $('input[name="radio"]:checked').val();
  

  

  if(cvs_check == 0){
  	flk4 = '';
  }else{
  	if(cvsval !== undefined){
     	flk4 = ' '+cvsval;
   }else{
     flk4 = '';
   }
  	
  	
  }


 //  $('#keyword_1').on('keyup', function(e){
  	
 //  	if($(this).val().match('OR') == 'OR' || $(this).val().match('or') == 'or') {
	//         console.log('or!');
	// }
 //  })

  // if(check == 1){
  //   flk6 = ' AND (yahoo.com OR gmail.com)';
  // }else{
  //   flk6 = '';
  // }

  

  if(hasWhiteSpace(k1)){
    k1 = '"'+k1+'"';
  }

  if(s1 !== ''){
    s1 = ""+s1+"";
  }

  if(hasWhiteSpace(s1)){
    s1 = '"'+s1+'"';
  }

  if(s1 !== ''){
  	s1 = ' OR '+s1;
  }else{
  	s1 = '';
  }
  if(k1 !== '' || s1 !==''){
     flk1 = '('+k1+""+s1+')';
  }



  if(hasWhiteSpace(k2)){
    k2 = '"'+k2+'"';
  }
  
  // if(s2 !== ''){
  //   s2 = "OR "+s2+"";
  // }

  if(hasWhiteSpace(s2)){
    s2 = '"'+s2+'"';
  }

  if(s2 !== ''){
  	s2 = ' OR '+s2;
  }else{
  	s2 = '';
  }
  if(k2 !== '' || s2 !==''){
     flk2 = ' AND ('+k2+""+s2+')';
  }

  if(hasWhiteSpace(k3)){
    k3 = '"'+k3+'"';
  }
  
  // if(s3 !== ''){
  //   s3 = "OR "+s3+"";
  // }

  if(hasWhiteSpace(s3)){
    s3 = '"'+s3+'"';
  }

  if(s3 !== ''){
  	s3 = ' OR '+s3;
  }else{
  	se3 = '';
  }

  if(k3 !== '' || s3 !==''){
     flk3 = ' AND ('+k3+""+s3+')';
  }

  // if(hasWhiteSpace(k4)){
  //   k4 = '"'+k4+'"';
  // }
  
  // if(s4 !== ''){
  //   s4 = "OR "+s4+"";
  // }

  // if(hasWhiteSpace(s4)){
  //   s4 = '"'+s4+'"';
  // }

  // if(s4 !== ''){
  // 	s4 = ' OR '+s4;
  // }else{
  // 	s4 = '';
  // }


  // if(k4 !== '' || s4 !==''){
  //    flk4 = ' AND ('+k4+""+s4+')';
  // }

  if(hasWhiteSpace(k5)){
    k5 = '"'+k5+'"';
  }
  
  if(hasWhiteSpace(s5)){
    s5 = '"'+s5+'"';
  }

  if(s5 !== ''){
    s5 = " OR "+s5+"";
  }else{
  	s5 = '';
  }

  if(k5 !== '' || s5 !==''){
     flk5 = ' AND ('+k5+""+s5+')';
  }


if(hasWhiteSpace(k6)){
    k6 = ' -"'+k6+'"';
  }else if(k6 == ''){
    k6 = '';
  }else{
    k6 = ' -'+k6+'';
  }

if(hasWhiteSpace(s6)){
    s6 = ' -"'+s6+'"';
  }else if(s6 == ''){
    s6 = '';
  }else{
    s6 = ' -'+s6+'';
  }

  //formula 1
  var fl  = ''+flk1+''+flk2+''+flk3+''+flk5+''+flk6+''+flk4+''+k6+''+s6+'';
  $('#boolean_1').val(fl);
  $('.test_1').text(fl);

  if(fl == ''){
    $('.test_1').removeClass('h-auto');
  }else{
    $('.test_1').addClass('h-auto');
  }
}




function getP4(){    
  var k1 = $('#keyword_1').val().toLowerCase();
  var k2 = $('#keyword_2').val().toLowerCase();
  var k3 = $('#keyword_3').val().toLowerCase();
  //var k4 = $('#keyword_4').val().toLowerCase();

  var k5 = $('#keyword_5').val().toLowerCase();
  var k6 = $('#keyword_6').val().toLowerCase();

  var s1 = $('#synon_1').val().toLowerCase();
  var s2 = $('#synon_2').val().toLowerCase();
  var s3 = $('#synon_3').val().toLowerCase();
  //var s4 = $('#synon_4').val().toLowerCase();

  var s5 = $('#synon_5').val().toLowerCase();
  var s6 = $('#synon_6').val().toLowerCase();

  var s6 = $('#synon_6').val().toLowerCase();

  var checked = $('#contact').val();
  var cvs_check = $('#cvs').val();
  //console.log(checked);

  var flk1 = '';
  var flk2 = '';
  var flk3 = '';
  var flk4 = '';
  var flk5 = '';
  var flk6 = '';

  var cvsval = $('input[name="radio"]:checked').attr('data-for');
  

  

  if(cvs_check == 0){
  	flk4 = '';
  }else{
  	if(cvsval !== undefined){
     	flk4 = ' '+cvsval;
   }else{
     flk4 = '';
   }
  	
  	
  }




  if(k1 !== ''){
    k1 = '"'+k1+'"';
   }else{
    k1 ='';
   }




  if(s1 !== ''){
    s1 = ' OR "'+s1+'"';
  }else{
  	s1 = '';
  }


  if(k1 !== '' || s1 !==''){
     flk1 = '('+k1+""+s1+')';
  }

  //row2

   if(k2 !== ''){
    k2 = '"'+k2+'"';
   }else{
    k2 ='';
   }


  if(s2 !== ''){
    s2 = ' OR "'+s2+'"';
  }else{
    s2 ='';
  }

  if(k2 !== '' || s2 !==''){
     flk2 = ' AND ('+k2+""+s2+')';
  }

  //row3

   if(k3 !== ''){
    k3 = '"'+k3+'"';
   }else{
    k3 ='';
   }


  if(s3 !== ''){
    s3 = ' OR "'+s3+'"';
  }else{
    s3 ='';
  }

  if(k3 !== '' || s3 !==''){
     flk3 = ' AND ('+k3+""+s3+')';
  }

  //row4

  //  if(k4 !== ''){
  //   k4 = '"'+k4+'"';
  //  }else{
  //   k4 ='';
  //  }


  // if(s4 !== ''){
  //   s4 = ' OR "'+s4+'"';
  // }else{
  //   s4 ='';
  // }

  // if(k4 !== '' || s4 !==''){
  //    flk4 = ' AND ('+k4+""+s4+')';
  // }

  //row5

   if(k5 !== ''){
    k5 = '"'+k5+'"';
   }else{
    k5 ='';
   }

  if(s5 !== ''){
    s5 = ' OR "'+s5+'"';
  }else{
    s5 ='';
  }

  if(k5 !== '' || s5 !==''){
     flk5 = ' AND ('+k5+""+s5+')';
  }



  //row6

  if(hasWhiteSpace(k6)){
    k6 = ' -"'+k6+'"';
  }else if(k6 == ''){
    k6 = '';
  }else{
    k6 = ' -'+k6+'';
  }

  if(hasWhiteSpace(s6)){
    s6 = ' -"'+s6+'"';
  }else if(s6 == ''){
    s6 = '';
  }else{
    s6 = ' -'+s6+'';
  }

  if(checked == '1'){
    flk6 = ' AND ("yahoo.com" OR "gmail.com") ';
  }else{
    flk6 = '';
  }
  //formula 4
    var fl  = ''+flk1+''+flk2+''+flk3+''+flk5+''+flk6+''+flk4+''+k6+''+s6+'';
  $('#boolean_4').val(fl);
  $('.test_2').text(fl);

  if(fl == ''){
    $('.test_2').removeClass('h-auto');
  }else{
    $('.test_2').addClass('h-auto');
  }

}

$('#keyword_1').on('keyup', function(e){
  e.preventDefault();
  getP();
  getP4();

});

$('#synon_1').on('keyup', function(e){
  e.preventDefault();
  getP();
  getP4();
})

//row2
$('#keyword_2').on('keyup', function(e){
  e.preventDefault();
  getP();
  getP4();

});

$('#synon_2').on('keyup', function(e){
  e.preventDefault();
  getP();
  getP4();
})

//row3
$('#keyword_3').on('keyup', function(e){
  e.preventDefault();
  getP();
  getP4();
});

$('#synon_3').on('keyup', function(e){
  e.preventDefault();
  getP();
  getP4();
})

$('#keyword_5').on('keyup', function(e){
  e.preventDefault();
  getP();
  getP4();
});

$('#synon_5').on('keyup', function(e){
  e.preventDefault();
  getP();
  getP4();
})


$('#keyword_6').on('keyup', function(e){
  e.preventDefault();
  getP();
  getP4();
});

$('#synon_6').on('keyup', function(e){
  e.preventDefault();
  getP();
  getP4();
})


$('input[type=radio]').on('click', function(){
  getP();
  getP4();
})

$('#cvs').prop('checked', false);

$('#cvs').click(function() {
    if ($(this).is(':checked')) {
        $(this).val('1');
        getP();
  		getP4();
        $('.show_cvs_field').show();
        //console.log($(this).val());
    } else {
        $(this).val('0');
        getP();
  		getP4();
        $('.show_cvs_field').hide();
       // console.log($(this).val());
    }
});


$('#open_1').on('click', function(e){
  e.preventDefault();
  var val = $('.test_1').text();
  openData(val,"Google");
  window.open('http://google.com/search?q='+val);
})


$('#open_4').on('click', function(e){
  e.preventDefault();
  var val = $('.test_2').text();
    openData(val,"Google");
  window.open('http://google.com/search?q='+val);
})

//save search modal

  //validate save search

  $('.save_1').on('click', function(e){
    e.preventDefault();
    $('#val-search').addClass('h-auto');
    var _elm = $('.test_1').text();
    if(_elm == ""){
      console.log('need to fill');
      $('.test_1').css('border-color','red');
    }else{
      $('#save-modal-1').modal('toggle');
      $('#val-search').text(_elm);
	  saveData(_elm,"Google");
      $('.test_1').css('border-color','green');
    }
  });

  $('.save_2').on('click', function(e){
    e.preventDefault();
    var _elm = $('.test_2').text();
    if(_elm == ""){
      console.log('need to fill');
      $('.test_2').css('border-color','red');
    }else{
      $('#save-modal-1').modal('toggle');
      $('#val-search').text(_elm);
	   saveData(_elm,"Google");
      $('.test_2').css('border-color','green');
    }
  });
  
   /*                               */
  /*  Code for linkedin page       */
  /*                               */
  
function getlnkP(){    
  var k1 = $('#lkeyword_1').val().toLowerCase();
  var k2 = $('#lkeyword_2').val().toLowerCase();
  var k3 = $('#lkeyword_3').val().toLowerCase();
  //var k4 = $('#keyword_4').val().toLowerCase();

  var k5 = $('#lkeyword_5').val().toLowerCase();
  var k6 = $('#lkeyword_6').val().toLowerCase();

  var s1 = $('#lsynon_1').val().toLowerCase();
  var s2 = $('#lsynon_2').val().toLowerCase();
  var s3 = $('#lsynon_3').val().toLowerCase();
  //var s4 = $('#synon_4').val().toLowerCase();

  var s5 = $('#lsynon_5').val().toLowerCase();
  var s6 = $('#lsynon_6').val().toLowerCase();

 var countryName = $('#planner-industry').val().toLowerCase();



  var flk1 = '';
  var flk2 = '';
  var flk3 = '';
  var flk4 = '';
  var flk5 = '';
  var flk6 = '';
  var flk7 = '';
  
  



  if(hasWhiteSpace(k1)){
    k1 = '"'+k1+'"';
  }

  if(s1 !== ''){
    s1 = ""+s1+"";
  }

  if(hasWhiteSpace(s1)){
    s1 = '"'+s1+'"';
  }

  if(s1 !== ''){
  	s1 = ' OR '+s1;
  }else{
  	s1 = '';
  }
  if(k1 !== '' || s1 !==''){
     flk1 = '('+k1+""+s1+')';
  }



  if(hasWhiteSpace(k2)){
    k2 = '"'+k2+'"';
  }
  
  // if(s2 !== ''){
  //   s2 = "OR "+s2+"";
  // }

  if(hasWhiteSpace(s2)){
    s2 = '"'+s2+'"';
  }

  if(s2 !== ''){
  	s2 = ' OR '+s2;
  }else{
  	s2 = '';
  }
  if(k2 !== '' || s2 !==''){
     flk2 = ' AND ('+k2+""+s2+')';
  }

  if(hasWhiteSpace(k3)){
    k3 = '"'+k3+'"';
  }
  
  // if(s3 !== ''){
  //   s3 = "OR "+s3+"";
  // }

  if(hasWhiteSpace(s3)){
    s3 = '"'+s3+'"';
  }

  if(s3 !== ''){
  	s3 = ' OR '+s3;
  }else{
  	se3 = '';
  }

  if(k3 !== '' || s3 !==''){
     flk3 = ' AND ('+k3+""+s3+')';
  }

 

  if(hasWhiteSpace(k5)){
    k5 = '"'+k5+'"';
  }
  
  if(hasWhiteSpace(s5)){
    s5 = '"'+s5+'"';
  }

  if(s5 !== ''){
    s5 = " OR "+s5+"";
  }else{
  	s5 = '';
  }

  if(k5 !== '' || s5 !==''){
     flk5 = ' AND ('+k5+""+s5+')';
  }


if(hasWhiteSpace(k6)){
    k6 = ' -"'+k6+'"';
  }else if(k6 == ''){
    k6 = '';
  }else{
    k6 = ' -'+k6+'';
  }

if(hasWhiteSpace(s6)){
    s6 = ' -"'+s6+'"';
  }else if(s6 == ''){
    s6 = '';
  }else{
    s6 = ' -'+s6+'';
  }

  //formula 1
  var fl  = ''+flk1+''+flk2+''+flk3+''+flk5+''+flk6+''+flk4+''+k6+''+s6+'';
  var prefC = "";
  if(countryName != "all")
  {
  	prefC = "site:" + countryName + ".linkedin.com/in/ ";
  }
  else
  {
  		prefC = "site:linkedin.com/in/ ";
  }
//  $('#boolean_1').val(fl);
  $('.ltest_1').text(prefC + fl);

  if(fl == ''){
     $('.ltest_1').removeClass('h-auto');
  }else{
     $('.ltest_1').addClass('h-auto');
  }
}


$('#planner-industry').on('change', function(e){
  e.preventDefault();
  getlnkP();

});

$('#lkeyword_1').on('keyup', function(e){
  e.preventDefault();
  getlnkP();

});

$('#lsynon_1').on('keyup', function(e){
  e.preventDefault();
 getlnkP();
})

//row2
$('#lkeyword_2').on('keyup', function(e){
  e.preventDefault();
   getlnkP();
});

$('#lsynon_2').on('keyup', function(e){
  e.preventDefault();
   getlnkP();
})

//row3
$('#lkeyword_3').on('keyup', function(e){
  e.preventDefault();
  getlnkP();
});

$('#lsynon_3').on('keyup', function(e){
  e.preventDefault();
   getlnkP();
})

$('#lkeyword_5').on('keyup', function(e){
  e.preventDefault();
  getlnkP();
});

$('#lsynon_5').on('keyup', function(e){
  e.preventDefault();
  getlnkP();
});


$('#lkeyword_6').on('keyup', function(e){
  e.preventDefault();
  getlnkP();
});

$('#lsynon_6').on('keyup', function(e){
  e.preventDefault();
 getlnkP();
});

$('#lopen_4').on('click', function(e){
  e.preventDefault();
  var val = $('.ltest_1').text();
    openData(val,"Linkedin");
  window.open('http://google.com/search?q='+val);
});

 $('#lsave_1').on('click', function(e){
    e.preventDefault();
    $('#val-search').addClass('h-auto');
    var _elm = $('.ltest_1').text();
    if(_elm == ""){
      console.log('need to fill');
      $('.ltest_1').css('border-color','red');
    }else{
      $('#save-modal-1').modal('toggle');
      $('#val-search').text(_elm);
	   saveData(_elm,"Linkedin");
      $('.ltest_1').css('border-color','green');
    }
  });
  
  
     /*                               */
  /*  Code for github page       */
  /*                               */
  
function getgHub(){    
  var k1 = $('#gkeyword_1').val().toLowerCase();
  var k2 = $('#gkeyword_2').val().toLowerCase();
  var k3 = $('#gkeyword_3').val().toLowerCase();
  //var k4 = $('#keyword_4').val().toLowerCase();

  var k5 = $('#gkeyword_5').val().toLowerCase();
  var k6 = $('#gkeyword_6').val().toLowerCase();

  var s1 = $('#gsynon_1').val().toLowerCase();
  var s2 = $('#gsynon_2').val().toLowerCase();
  var s3 = $('#gsynon_3').val().toLowerCase();
  //var s4 = $('#synon_4').val().toLowerCase();

  var s5 = $('#gsynon_5').val().toLowerCase();
  var s6 = $('#gsynon_6').val().toLowerCase();





  var flk1 = '';
  var flk2 = '';
  var flk3 = '';
  var flk4 = '';
  var flk5 = '';
  var flk6 = '';
  var flk7 = '';
  
  



  if(hasWhiteSpace(k1)){
    k1 = '"'+k1+'"';
  }

  if(s1 !== ''){
    s1 = ""+s1+"";
  }

  if(hasWhiteSpace(s1)){
    s1 = '"'+s1+'"';
  }

  if(s1 !== ''){
  	s1 = ' OR '+s1;
  }else{
  	s1 = '';
  }
  if(k1 !== '' || s1 !==''){
     flk1 = '('+k1+""+s1+')';
  }



  if(hasWhiteSpace(k2)){
    k2 = '"'+k2+'"';
  }
  
  // if(s2 !== ''){
  //   s2 = "OR "+s2+"";
  // }

  if(hasWhiteSpace(s2)){
    s2 = '"'+s2+'"';
  }

  if(s2 !== ''){
  	s2 = ' OR '+s2;
  }else{
  	s2 = '';
  }
  if(k2 !== '' || s2 !==''){
     flk2 = ' AND ('+k2+""+s2+')';
  }

  if(hasWhiteSpace(k3)){
    k3 = '"'+k3+'"';
  }
  
  // if(s3 !== ''){
  //   s3 = "OR "+s3+"";
  // }

  if(hasWhiteSpace(s3)){
    s3 = '"'+s3+'"';
  }

  if(s3 !== ''){
  	s3 = ' OR '+s3;
  }else{
  	se3 = '';
  }

  if(k3 !== '' || s3 !==''){
     flk3 = ' AND ('+k3+""+s3+')';
  }

 

  if(hasWhiteSpace(k5)){
    k5 = '"'+k5+'"';
  }
  
  if(hasWhiteSpace(s5)){
    s5 = '"'+s5+'"';
  }

  if(s5 !== ''){
    s5 = " OR "+s5+"";
  }else{
  	s5 = '';
  }

  if(k5 !== '' || s5 !==''){
     flk5 = ' AND ('+k5+""+s5+')';
  }


if(hasWhiteSpace(k6)){
    k6 = ' -"'+k6+'"';
  }else if(k6 == ''){
    k6 = '';
  }else{
    k6 = ' -'+k6+'';
  }

if(hasWhiteSpace(s6)){
    s6 = ' -"'+s6+'"';
  }else if(s6 == ''){
    s6 = '';
  }else{
    s6 = ' -'+s6+'';
  }

  //formula 1
  var fl  = flk1+''+flk2+''+flk3+''+flk5+''+flk6+''+flk4+''+k6+''+s6+'';
  var flone  = flk1+''+flk2+''+flk3+''+flk5+''+flk6+''+flk4+''+k6+''+s6+'';
 
//  $('#boolean_1').val(fl);
  $('.gtest_1').text('site:github.com '+fl);
   $('.gtest_2').text('site:github.com ("block or report") AND '+ flone);

  if(fl == ''){
     $('.gtest_1').removeClass('h-auto');
	   $('.gtest_2').removeClass('h-auto');
	    $('.gtest_1').text("");
   $('.gtest_2').text("");
  }else{
     $('.gtest_1').addClass('h-auto');
	  $('.gtest_2').addClass('h-auto');
  }
}




$('#gkeyword_1').on('keyup', function(e){
  e.preventDefault();
 getgHub();

});

$('#gsynon_1').on('keyup', function(e){
  e.preventDefault();
 getgHub();
})

//row2
$('#gkeyword_2').on('keyup', function(e){
  e.preventDefault();
 getgHub();
});

$('#gsynon_2').on('keyup', function(e){
  e.preventDefault();
 getgHub();
})

//row3
$('#gkeyword_3').on('keyup', function(e){
  e.preventDefault();
 getgHub();
});

$('#gsynon_3').on('keyup', function(e){
  e.preventDefault();
 getgHub();
})

$('#gkeyword_5').on('keyup', function(e){
  e.preventDefault();
   getgHub();
});

$('#gsynon_5').on('keyup', function(e){
  e.preventDefault();
 getgHub();
});


$('#gkeyword_6').on('keyup', function(e){
  e.preventDefault();
   getgHub();
});

$('#gsynon_6').on('keyup', function(e){
  e.preventDefault();
 getgHub();
});

$('#gopen_1').on('click', function(e){
  e.preventDefault();
  var val = $('.gtest_1').text();
  openData(val,"Github");
  window.open('http://google.com/search?q='+val);
});

$('#gopen_4').on('click', function(e){
  e.preventDefault();
  var val = $('.gtest_2').text();
   openData(val,"Github");
  window.open('http://google.com/search?q='+val);
});

 $('.gsave_1').on('click', function(e){
    e.preventDefault();
    $('#val-search').addClass('h-auto');
    var _elm = $('.gtest_1').text();
    if(_elm == ""){
      console.log('need to fill');
      $('.gtest_1').css('border-color','red');
    }else{
      $('#save-modal-1').modal('toggle');
      $('#val-search').text(_elm);
	    saveData(_elm,"Github");
      $('.gtest_1').css('border-color','green');
    }
  });
  
  $('.gsave_2').on('click', function(e){
    e.preventDefault();
    $('#val-search').addClass('h-auto');
    var _elm = $('.gtest_2').text();
    if(_elm == ""){
      console.log('need to fill');
      $('.gtest_2').css('border-color','red');
    }else{
      $('#save-modal-1').modal('toggle');
      $('#val-search').text(_elm);
	      saveData(_elm,"Github");
      $('.gtest_2').css('border-color','green');
    }
  });
  
  
  // function to count generated strings
  function openData(gstr,tab)
  {
  	 $.ajax({
	 	url: 'https://jsonip.com',  
	  crossDomain: true,
	  type:'GET',
	
		 success: function (res) {
	  var sdata = {"uip": res.ip,"ustr":gstr,"serch":tab};
     //   $('p').html('IP Address is: ' + res.ip);
		
		$.ajax({  
url: lurl + 'php/openlink.php',  
type: 'POST', 
data:sdata, 
success: function(data) {  
   // $("#para").html(data);                
  }  
});  
}
    });
  }

// function to count saved search
 function saveData(gstr,tab)
  {
   $.ajax({
	 	url: 'https://jsonip.com',  
	  crossDomain: true,
	  type:'GET',
	
		 success: function (res) {
	 var sdata = {"uip": res.ip, "ustr":gstr, "serch":tab};
     //   $('p').html('IP Address is: ' + res.ip);
		console.log(sdata);
		$.ajax({  
url: lurl +  'php/savelink.php',  
type: 'POST', 
data:sdata, 
  success: function(data) {  
   // $("#para").html(data);                
  }  
});  
}
    });
  }


// search function for dropdown
function matchCustom(params, data) {
    // If there are no search terms, return all of the data
    if ($.trim(params.term) === '') {
      return data;
    }

    // Do not display the item if there is no 'text' property
    if (typeof data.text === 'undefined') {
      return null;
    }

    // `params.term` should be the term that is used for searching
    // `data.text` is the text that is displayed for the data object
    if ((data.id.toLowerCase().indexOf(params.term) > -1)  || ((data.text.toLowerCase().indexOf(params.term) > -1) && (data.text.toLowerCase().indexOf(params.term) == 0))) {
      var modifiedData = $.extend({}, data, true);
      modifiedData.text += ' ';

      // You can return modified objects from here
      // This includes matching the `children` how you want in nested data sets
      return modifiedData;
    }

    // Return `null` if the term should not be displayed
    return null;
}

});
  (function() {
    'use strict';
    window.addEventListener('load', function() {
      var forms = document.getElementsByClassName('needs-validation');
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

  //save localstorage
  var namer ;
  var names = [];
  var names2; 
  var saved = document.getElementById('saved-search');
  Read(); 
  Check();
  document.getElementById('form-save').addEventListener('submit', (e)=>{
    e.preventDefault();
    Create();
    Read(); 
    document.getElementById('form-save').reset();
    Check();
  });


  function Create(){
    let storage = JSON.parse(localStorage.getItem('forms'));
    namer = document.getElementById('name-search').value;
    formula = document.getElementById('val-search').textContent;
    
    if(namer==""){
      $('#valid_modal').show();
    }else{
      if(storage === null){
        names.push([namer, formula]);
        localStorage.setItem("forms", JSON.stringify(names));
        $('#save-modal-1').modal('toggle');
        $('#valid_modal').hide();
      }else{
        names=JSON.parse(localStorage.getItem('forms'));
        names.push([namer, formula]);
        localStorage.setItem('forms', JSON.stringify(names));
        $('#save-modal-1').modal('toggle');
        $('#valid_modal').hide();
      }

    }
  }

  function Read(){
    saved.innerHTML = '';
    names2=JSON.parse(localStorage.getItem("forms"));
    if(names2 !== null){
      for(var i = 0; i < names2.length; i++){
        saved.innerHTML +=`
        <span class="cursor-pointer  badge btn-sm btn-info btn-generator mr-1" data-toggle="tooltip" 
        title="" 
        data-original-title='${names2[i][1]}'>
            <span class="open_me_google" data-original-title='${names2[i][1]}'>${names2[i][0]}</span> 
            <span class="icon_close" onclick="Delete(${i});Check();">
                <img src="assets/img/icons/interface/icon-x-white.svg" alt="x icon" style="width:0.875rem;">
            </span>
        </span>
        `;
      }
    }
  }

  function Delete(i2){
    let names3 = JSON.parse(localStorage.getItem('forms'));
    names3.splice(i2,1);
    localStorage.setItem("forms", JSON.stringify(names3));
    Read();
    $(".tooltip").tooltip("hide");
  }

  function Check(){
    names2=JSON.parse(localStorage.getItem("forms"));
    if (localStorage.getItem("forms") === null || names2.length == 0) {
      $('#show_me_after').hide();
      document.getElementById('saved-search').innerHTML = `<div class="mb-0 alert bg-secondary fade show" role="alert">
          You have no saved searches 
          </button>
      </div>`;
    }else{
      $('#show_me_after').show();
    }
  }

  $(document).on('click', '.open_me_google', function(e){
    e.preventDefault();
    var _val = $(this).attr('data-original-title');
    window.open('http://google.com/search?q='+_val);
  });
  
  
  
 



  