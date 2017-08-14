
	$(document).on('click','#exit', function(){
	document.forms["myform"].submit();
        //return false;
       });
</script>
<script>

    function changeMean()
    {
        var ageValue = document.getElementById("age").value;

        if(document.getElementById('gender').value == "Male") {

        if(ageValue == "18-29")
        {
            var mean = 46.0 ;
            var sd = 8.50 ;

        }else if(ageValue == "30-39") {

           var mean = 42.8 ;
           var sd = 8.25 ;

      }else if(ageValue == "40-49") {

           var mean = 36.1 ;
           var sd = 7.35 ;

      }else if(ageValue == "50-59") {

           var mean = 31.0 ;
           var sd = 6.84 ;

      }else if(ageValue == "60-69") {

           var mean = 26.9 ;
           var sd = 6.36 ;

      }else if(ageValue == "70+") {

           var mean = 23.6 ;
           var sd = 5.91 ;
      }

    }else if(document.getElementById('gender').value == "Female") {

        if(ageValue == "18-29")
        {
            var mean = 33.5 ;
            var sd = 6.20 ;

        }else if(ageValue == "30-39") {

           var mean = 29.1 ;
           var sd = 5.77 ;

      }else if(ageValue == "40-49") {

           var mean = 25.4 ;
           var sd = 5.36 ;

      }else if(ageValue == "50-59") {

           var mean = 22.1 ;
           var sd = 4.99 ;

      }else if(ageValue == "60-69") {

           var mean = 19.2 ;
           var sd = 4.64 ;

      }else if(ageValue == "70+") {

           var mean = 16.7 ;
           var sd = 4.31 ;
      }

    }

    var r1 = (5.2000 * sd) + mean ;
    var r2 = (4.7550 * sd) + mean ;
    var r3 = (4.2650 * sd) + mean ;
    var r4 = (4.1100 * sd) + mean ;
    var r5 = (3.7200 * sd) + mean ;
    var r6 = (3.5410 * sd) + mean ;
    var r7 = (3.3550 * sd) + mean ;
    var r8 = (3.0900 * sd) + mean ;
    var r9 = (2.8785 * sd) + mean ;
    var r10 = (2.5760 * sd) + mean ;
    var r11 = (2.3270 * sd) + mean ;
    var r12 = (2.0550 * sd) + mean ;
    var r13 = (1.6600 * sd) + mean ;
    var r14 = (1.2816 * sd) + mean ;
    var r15 = (0.8420 * sd) + mean ;

      document.getElementById('meanVal').innerHTML = Math.round(parseFloat(mean));




        document.getElementById('class1').innerHTML = "~"+Math.round(parseFloat(r1))   ;
        document.getElementById('class2').innerHTML = "~"+Math.round(parseFloat(r2))   ;
        document.getElementById('class3').innerHTML = "~"+Math.round(parseFloat(r3))   ;
        document.getElementById('class4').innerHTML = "~"+Math.round(parseFloat(r4))   ;
        document.getElementById('class5').innerHTML = "~"+Math.round(parseFloat(r5))   ;
        document.getElementById('class6').innerHTML = "~"+Math.round(parseFloat(r6))   ;
        document.getElementById('class7').innerHTML = "~"+Math.round(parseFloat(r7))   ;
        document.getElementById('class8').innerHTML = "~"+Math.round(parseFloat(r8))   ;
        document.getElementById('class9').innerHTML = "~"+Math.round(parseFloat(r9))   ;
        document.getElementById('class10').innerHTML = "~"+Math.round(parseFloat(r10)) ;
        document.getElementById('class11').innerHTML = "~"+Math.round(parseFloat(r11)) ;
        document.getElementById('class12').innerHTML = "~"+Math.round(parseFloat(r12)) ;
        document.getElementById('class13').innerHTML = "~"+Math.round(parseFloat(r13)) ;
        document.getElementById('class14').innerHTML = "~"+Math.round(parseFloat(r14)) ;
        document.getElementById('class15').innerHTML = "~"+Math.round(parseFloat(r15)) ;



     getZscore() ;
    // show() ;

  }


  //calculate z-score value
    function getZscore()
    {
        var ageValue = document.getElementById("age").value;
        var vo2MAxVal = document.getElementById("vo2Max_value");
        var vo2Max = vo2MAxVal.value;


        var div1=document.getElementById('plot1');
        var div2=document.getElementById('plot2');
        var div3=document.getElementById('plot3');
        var div4=document.getElementById('plot4');
        var div5=document.getElementById('plot5');
        var div6=document.getElementById('plot6');
        var div7=document.getElementById('plot7');
        var div8=document.getElementById('plot8');
        var div9=document.getElementById('plot9');
        var div10=document.getElementById('plot10');
        var div11=document.getElementById('plot11');
        var div12=document.getElementById('plot12');
        var div13=document.getElementById('plot13');
        var div14=document.getElementById('plot14');
        var div15=document.getElementById('plot15');
        var div16_1=document.getElementById('plot16_1');
        var div16_2=document.getElementById('plot16_2');
        var div16_3=document.getElementById('plot16_3');
        var div17=document.getElementById('plot17');
        var div18_8=document.getElementById('plot18_8');
        var div18_7=document.getElementById('plot18_7');
        var div18_6=document.getElementById('plot18_6');
        var div18_5=document.getElementById('plot18_5');
        var div18_4=document.getElementById('plot18_4');
        var div18_3=document.getElementById('plot18_3');
        var div18_2=document.getElementById('plot18_2');
        var div18_1=document.getElementById('plot18_1');






        if(div1.style.display == "block")
        {
            div1.style.display = "none"
        }
        else if(div2.style.display == "block")
        {
            div2.style.display = "none"
        }
        else if(div3.style.display == "block")
        {
            div3.style.display = "none"
        }
        else if(div4.style.display == "block")
        {
            div4.style.display = "none"
        }
        else if(div5.style.display == "block")
        {
            div5.style.display = "none"
        }
        else if(div6.style.display == "block")
        {
            div6.style.display = "none"
        }
        else if(div7.style.display == "block")
        {
            div7.style.display = "none"
        }
        else if(div8.style.display == "block")
        {
            div8.style.display = "none"
        }
        else if(div9.style.display == "block")
        {
            div9.style.display = "none"
        }
        else if(div10.style.display == "block")
        {
            div10.style.display = "none"
        }
        else if(div11.style.display == "block")
        {
            div11.style.display = "none"
        }
        else if(div12.style.display == "block")
        {
            div12.style.display = "none"
        }
        else if(div13.style.display == "block")
        {
            div13.style.display = "none"
        }
        else if(div14.style.display == "block")
        {
            div14.style.display = "none"
        }
        else if(div15.style.display == "block")
        {
            div15.style.display = "none"
        }
        else if(div16_1.style.display == "block")
        {
            div16_1.style.display = "none"
        }
         else if(div16_2.style.display == "block")
        {
            div16_2.style.display = "none"
        }
         else if(div16_3.style.display == "block")
        {
            div16_3.style.display = "none"
        }
        else if(div17.style.display == "block")
        {
            div17.style.display = "none"
        }
        else if(div18_8.style.display == "block")
        {
            div18_8.style.display = "none"
        }
        else if(div18_7.style.display == "block")
        {
            div18_7.style.display = "none"
        }
        else if(div18_6.style.display == "block")
        {
            div18_6.style.display = "none"
        }
        else if(div18_5.style.display == "block")
        {
            div18_5.style.display = "none"
        }
        else if(div18_4.style.display == "block")
        {
            div18_4.style.display = "none"
        }
        else if(div18_3.style.display == "block")
        {
            div18_3.style.display = "none"
        }
        else if(div18_2.style.display == "block")
        {
            div18_2.style.display = "none"
        }
        else if(div18_1.style.display == "block")
        {
            div18_1.style.display = "none"
        }




       if(document.getElementById('gender').value == "Male") {

        if(ageValue == "18-29")
        {
            var mean = 46.0 ;
            var sd = 8.50 ;

        }else if(ageValue == "30-39") {

           var mean = 42.8 ;
           var sd = 8.25 ;

      }else if(ageValue == "40-49") {

           var mean = 36.1 ;
           var sd = 7.35 ;

      }else if(ageValue == "50-59") {

           var mean = 31.0 ;
           var sd = 6.84 ;

      }else if(ageValue == "60-69") {

           var mean = 26.9 ;
           var sd = 6.36 ;

      }else if(ageValue == "70+") {

           var mean = 23.6 ;
           var sd = 5.91 ;
      }

    }else if(document.getElementById('gender').value == "Female") {

        if(ageValue == "18-29")
        {
            var mean = 33.5 ;
            var sd = 6.20 ;

        }else if(ageValue == "30-39") {

           var mean = 29.1 ;
           var sd = 5.77 ;

      }else if(ageValue == "40-49") {

           var mean = 25.4 ;
           var sd = 5.36 ;

      }else if(ageValue == "50-59") {

           var mean = 22.1 ;
           var sd = 4.99 ;

      }else if(ageValue == "60-69") {

           var mean = 19.2 ;
           var sd = 4.64 ;

      }else if(ageValue == "70+") {

           var mean = 16.7 ;
           var sd = 4.31 ;
      }

    }

    var z_score = (parseFloat(vo2Max) - parseFloat(mean)) / parseFloat(sd) ;
      if(isNaN(z_score)){
            document.getElementById("percentile").value = "" ;
        }
        else
        {
           z_score = Math.floor(parseFloat(z_score) * 1000) / 1000 ;

           // NORMDIST for z-score
           var perform_percent = normalcdf(z_score);

            if(isNaN(parseFloat(perform_percent * 100)))
            {
               document.getElementById("percentile").value = "" ;
             }
             else
             {
                 document.getElementById("percentile").value = Math.floor(parseFloat(perform_percent * 100) * 1000000) / 1000000 ;

             }

           if(document.getElementById("percentile").value < 48)
           {
             if(document.getElementById("percentile").value >= 0 && document.getElementById("percentile").value < 7)
                {
                   var scorePlot = '1 in 1_1' ;
                }
             else if(document.getElementById("percentile").value >= 7 && document.getElementById("percentile").value < 14)
                {
                   var scorePlot = '1 in 1_2' ;
                }
             else if(document.getElementById("percentile").value >= 14 && document.getElementById("percentile").value < 20)
                {
                   var scorePlot = '1 in 1_3' ;
                }
             else if(document.getElementById("percentile").value >= 20 && document.getElementById("percentile").value < 30)
                {
                   var scorePlot = '1 in 1_4' ;
                }
             else if(document.getElementById("percentile").value >= 30 && document.getElementById("percentile").value < 35)
                {
                   var scorePlot = '1 in 1_5' ;
                }
             else if(document.getElementById("percentile").value >= 35 && document.getElementById("percentile").value < 40)
                {
                   var scorePlot = '1 in 1_6' ;
                }
             else if(document.getElementById("percentile").value >= 40 && document.getElementById("percentile").value < 44)
                {
                   var scorePlot = '1 in 1_7' ;
                }
             else if(document.getElementById("percentile").value >= 44 && document.getElementById("percentile").value < 48 )
                {
                   var scorePlot = '1 in 1_8' ;
                }
           }
           else if(document.getElementById("percentile").value >= 48 && document.getElementById("percentile").value < 52)
           {
              var scorePlot = '1 in 2' ;
           }
           else if(document.getElementById("percentile").value >= 52 && document.getElementById("percentile").value <= 80)
           {
               if(document.getElementById("percentile").value >= 52 && document.getElementById("percentile").value <= 60)
               {
                 var scorePlot = '1 in 3_1' ;
               }
               else if(document.getElementById("percentile").value > 60 && document.getElementById("percentile").value <= 70)
               {
                 var scorePlot = '1 in 3_2' ;
               }
               else if(document.getElementById("percentile").value > 70 && document.getElementById("percentile").value <= 80)
               {
                 var scorePlot = '1 in 3_3' ;
               }

           }
           else if(z_score > 0.8100 && z_score <= 0.8420)
           {
              var perform_percent = normalcdf(z_score);
              var scorePlot = '1 in 5' ;
           }
           else if(z_score > 0.8420 && z_score <= 1.0100)
           {
              var perform_percent = normalcdf(z_score);
              var scorePlot = '1 in 5' ;
           }
           else if(z_score > 1.0100 && z_score <= 1.1100)
           {
              var perform_percent = normalcdf(z_score);
              var scorePlot = '1 in 5' ;
           }
           else if(z_score > 1.1100 && z_score <= 1.2100)
           {
              var perform_percent = normalcdf(z_score);
              var scorePlot = '1 in 5' ;
           }
           else if(z_score > 1.2100 && z_score <= 1.2816)
           {
              var perform_percent = normalcdf(z_score);
              var scorePlot = '1 in 10' ;
           }
           else if(z_score > 1.2816 && z_score <= 1.4100)
           {
              var perform_percent = normalcdf(z_score);
              var scorePlot = '1 in 10' ;
           }
           else if(z_score > 1.4100 && z_score <= 1.5100)
           {
              var perform_percent = normalcdf(z_score);
              var scorePlot = '1 in 10' ;
           }
           else if(z_score > 1.5100 && z_score <= 1.6100)
           {
              var perform_percent = normalcdf(z_score);
              var scorePlot = '1 in 10' ;
           }
           else if(z_score > 1.6100 && z_score <= 1.6600)
           {
              var perform_percent = normalcdf(z_score);
              var scorePlot = '1 in 20' ;
           }
           else if(z_score > 1.6600 && z_score <= 1.8100)
           {
              var perform_percent = normalcdf(z_score);
              var scorePlot = '1 in 20' ;
           }
           else if(z_score > 1.8100 && z_score <= 1.9100)
           {
              var perform_percent = normalcdf(z_score);
              var scorePlot = '1 in 20' ;
           }
           else if(z_score > 1.9100 && z_score <= 2.0550)
           {
              var perform_percent = normalcdf(z_score);
              var scorePlot = '1 in 50' ;
           }
           else if(z_score > 2.0550 && z_score <= 2.1100)
           {
              var perform_percent = 0.98257082 ;
              var scorePlot = '1 in 50' ;
           }
           else if(z_score > 2.1100 && z_score <= 2.2100)
           {
              var perform_percent = normalcdf(z_score);
              var scorePlot = '1 in 50' ;
           }
           else if(z_score > 2.2100 && z_score <= 2.3270)
           {
              var perform_percent = normalcdf(z_score);
              var scorePlot = '1 in 100' ;
           }
           else if(z_score > 2.3270 && z_score <= 2.4100)
           {
              var perform_percent = normalcdf(z_score);
              var scorePlot = '1 in 100' ;
           }
           else if(z_score > 2.4100 && z_score <= 2.5100)
           {
              var perform_percent = normalcdf(z_score);
              var scorePlot = '1 in 100' ;
           }
           else if(z_score > 2.5100 && z_score <= 2.5760)
           {
              var perform_percent = normalcdf(z_score);
              var scorePlot = '1 in 200' ;
           }
           else if(z_score > 2.5760 && z_score <= 2.7100)
           {
              var perform_percent = normalcdf(z_score);
              var scorePlot = '1 in 200' ;
           }
           else if(z_score > 2.7100 && z_score <= 2.8100)
           {
              var perform_percent = normalcdf(z_score);
              var scorePlot = '1 in 200' ;
           }
           else if(z_score > 2.8100 && z_score <= 2.8785)
           {
              var perform_percent = normalcdf(z_score);
              var scorePlot = '1 in 500' ;
           }
           else if(z_score > 2.8785 && z_score <= 3.0100)
           {
              var perform_percent = normalcdf(z_score);
              var scorePlot = '1 in 500' ;
           }
           else if(z_score > 3.0100 && z_score <= 3.0900)
           {
              var perform_percent = normalcdf(z_score);
              var scorePlot = '1 in 1000' ;
           }
           else if(z_score > 3.0900 && z_score <= 3.2100)
           {
              var perform_percent = normalcdf(z_score);
              var scorePlot = '1 in 1000' ;
           }
           else if(z_score > 3.2100 && z_score <= 3.3550)
           {
              var perform_percent = normalcdf(z_score);
              var scorePlot = '1 in 2,500' ;
           }
           else if(z_score > 3.3550 && z_score <= 3.4100)
           {
              var perform_percent = normalcdf(z_score);
              var scorePlot = '1 in 2,500' ;
           }
           else if(z_score > 3.4100 && z_score <= 3.5410)
           {
              var perform_percent = normalcdf(z_score);
              var scorePlot = '1 in 5,000' ;
           }
           else if(z_score > 3.5410 && z_score <= 3.6100)
           {
              var perform_percent = normalcdf(z_score);
              var scorePlot = '1 in 5,000' ;
           }
           else if(z_score > 3.6100 && z_score <= 3.7200)
           {
              var perform_percent = normalcdf(z_score);
              var scorePlot = '1 in 10,000' ;
           }
           else if(z_score > 3.7200 && z_score <= 3.8100)
           {
              var perform_percent = normalcdf(z_score);
              var scorePlot = '1 in 10,000' ;
           }
           else if(z_score > 3.8100 && z_score <= 3.9100)
           {
              var perform_percent = normalcdf(z_score);
              var scorePlot = '1 in 10,000' ;
           }
           else if(z_score > 3.9100 && z_score <= 4.0100)
           {
              var perform_percent = normalcdf(z_score);
              var scorePlot = '1 in 10,000' ;
           }
           else if(z_score > 4.0100 && z_score <= 4.1100)
           {
              var perform_percent = normalcdf(z_score);
              var scorePlot = '1 in 50,000' ;
           }
           else if(z_score > 4.1100 && z_score <= 4.2650)
           {
              var perform_percent = normalcdf(z_score);
              var scorePlot = '1 in 100,000' ;
           }
           else if(z_score > 4.2650 && z_score <= 4.3100)
           {
              var perform_percent = normalcdf(z_score);
              var scorePlot = '1 in 100,000' ;
           }
           else if(z_score > 4.3100 && z_score <= 4.4100)
           {
              var perform_percent = normalcdf(z_score);
              var scorePlot = '1 in 100,000' ;
           }
           else if(z_score > 4.4100 && z_score <= 4.5100)
           {
              var perform_percent = normalcdf(z_score);
              var scorePlot = '1 in 100,000' ;
           }
           else if(z_score > 4.5100 && z_score <= 4.6100)
           {
              var perform_percent = normalcdf(z_score);
              var scorePlot = '1 in 100,000' ;
           }
           else if(z_score > 4.6100 && z_score <= 4.7550)
           {
              var perform_percent = normalcdf(z_score);
              var scorePlot = '1 in 1,000,000' ;
           }
           else if(z_score > 4.7550 && z_score <= 4.8100)
           {
              var perform_percent = normalcdf(z_score);
              var scorePlot = '1 in 1,000,000' ;
           }
           else if(z_score > 4.8100 && z_score <= 4.9100)
           {
              var perform_percent = normalcdf(z_score);
              var scorePlot = '1 in 1,000,000' ;
           }
           else if(z_score > 4.9100 && z_score <= 5.0100)
           {
              var perform_percent = normalcdf(z_score);
              var scorePlot = '1 in 1,000,000' ;
           }
           else if(z_score > 5.0100 && z_score <= 5.1100)
           {
              var perform_percent = normalcdf(z_score);
              var scorePlot = '1 in 1,000,000' ;
           }
           else if(z_score > 5.1100 && z_score <= 5.2000)
           {
              var perform_percent = normalcdf(z_score);
              var scorePlot = '1 in 10,000,000' ;
           }
           else if(z_score > 5.2000)
           {
              var perform_percent = normalcdf(z_score);
              var scorePlot = '1 in 10,000,000' ;
           }

           document.getElementById("scorePlot").value = scorePlot ;



        }

         changeSportMean() ;
    }

    function normalcdf(x){
        //HASTINGS.  MAX ERROR = .000001
	var t = 1/(1 + 0.2316419 * Math.abs(x));
	var d = 0.3989423 * Math.exp(-x * x / 2);
	var Prob = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
	if (x > 0) {
		Prob = 1 - Prob ;
	}

       // alert(Prob); die;
	return Prob ;
    }



    function changeSportMean()
    {
        var sportValue = document.getElementById("sport").value ;

        var testmean1 = document.getElementById('class1').innerHTML.replace('~', '')   ;
        var testmean2 = document.getElementById('class2').innerHTML.replace('~', '')   ;
        var testmean3 = document.getElementById('class3').innerHTML.replace('~', '')   ;
        var testmean4 = document.getElementById('class4').innerHTML.replace('~', '')   ;
        var testmean5 = document.getElementById('class5').innerHTML.replace('~', '')   ;
        var testmean6 = document.getElementById('class6').innerHTML.replace('~', '')   ;
        var testmean7 = document.getElementById('class7').innerHTML.replace('~', '')   ;
        var testmean8 = document.getElementById('class8').innerHTML.replace('~', '')   ;
        var testmean9 = document.getElementById('class9').innerHTML.replace('~', '')   ;
        var testmean10 = document.getElementById('class10').innerHTML.replace('~', '')  ;
        var testmean11 = document.getElementById('class11').innerHTML.replace('~', '')  ;
        var testmean12 = document.getElementById('class12').innerHTML.replace('~', '')  ;
        var testmean13 = document.getElementById('class13').innerHTML.replace('~', '')  ;
        var testmean14 = document.getElementById('class14').innerHTML.replace('~', '')  ;
        var testmean15 = document.getElementById('class15').innerHTML.replace('~', '')  ;
        var testmean = document.getElementById('meanVal').innerHTML   ;


        var divsport1=document.getElementById('score1');
        var divsport2=document.getElementById('score2');
        var divsport3=document.getElementById('score3');
        var divsport4=document.getElementById('score4');
        var divsport5=document.getElementById('score5');
        var divsport6=document.getElementById('score6');
        var divsport7=document.getElementById('score7');
        var divsport8=document.getElementById('score8');
        var divsport9=document.getElementById('score9');
        var divsport10=document.getElementById('score10');
        var divsport11=document.getElementById('score11');
        var divsport12=document.getElementById('score12');
        var divsport13=document.getElementById('score13');
        var divsport14=document.getElementById('score14');
        var divsport15=document.getElementById('score15');
        var div16_1=document.getElementById('score16_1');
        var div16_2=document.getElementById('score16_2');
        var div16_3=document.getElementById('score16_3');
        var div17=document.getElementById('score17');
        var div18_8=document.getElementById('score18_8');
        var div18_7=document.getElementById('score18_7');
        var div18_6=document.getElementById('score18_6');
        var div18_5=document.getElementById('score18_5');
        var div18_4=document.getElementById('score18_4');
        var div18_3=document.getElementById('score18_3');
        var div18_2=document.getElementById('score18_2');
        var div18_1=document.getElementById('score18_1');


      if(sportValue != "")
       {
        if(divsport1.style.display == "block")
        {
            divsport1.style.display = "none"
        }
        else if(divsport2.style.display == "block")
        {
            divsport2.style.display = "none"
        }
        else if(divsport3.style.display == "block")
        {
            divsport3.style.display = "none"
        }
        else if(divsport4.style.display == "block")
        {
            divsport4.style.display = "none"
        }
        else if(divsport5.style.display == "block")
        {
            divsport5.style.display = "none"
        }
        else if(divsport6.style.display == "block")
        {
            divsport6.style.display = "none"
        }
        else if(divsport7.style.display == "block")
        {
            divsport7.style.display = "none"
        }
        else if(divsport8.style.display == "block")
        {
            divsport8.style.display = "none"
        }
        else if(divsport9.style.display == "block")
        {
            divsport9.style.display = "none"
        }
        else if(divsport10.style.display == "block")
        {
            divsport10.style.display = "none"
        }
        else if(divsport11.style.display == "block")
        {
            divsport11.style.display = "none"
        }
        else if(divsport12.style.display == "block")
        {
            divsport12.style.display = "none"
        }
        else if(divsport13.style.display == "block")
        {
            divsport13.style.display = "none"
        }
        else if(divsport14.style.display == "block")
        {
            divsport14.style.display = "none"
        }
        else if(divsport15.style.display == "block")
        {
           divsport15.style.display = "none"
        }
        else if(div16_1.style.display == "block")
        {
            div16_1.style.display = "none"
        }
         else if(div16_2.style.display == "block")
        {
            div16_2.style.display = "none"
        }
         else if(div16_3.style.display == "block")
        {
            div16_3.style.display = "none"
        }
        else if(div17.style.display == "block")
        {
            div17.style.display = "none"
        }
        else if(div18_8.style.display == "block")
        {
            div18_8.style.display = "none"
        }
        else if(div18_7.style.display == "block")
        {
            div18_7.style.display = "none"
        }
        else if(div18_6.style.display == "block")
        {
            div18_6.style.display = "none"
        }
        else if(div18_5.style.display == "block")
        {
            div18_5.style.display = "none"
        }
        else if(div18_4.style.display == "block")
        {
            div18_4.style.display = "none"
        }
        else if(div18_3.style.display == "block")
        {
            div18_3.style.display = "none"
        }
        else if(div18_2.style.display == "block")
        {
            div18_2.style.display = "none"
        }
        else if(div18_1.style.display == "block")
        {
            div18_1.style.display = "none"
        }
    }


   // Male
      if(document.getElementById('gender').value == "Male") {

        if(sportValue == "archery")
        {
            var mean = 58.8 ;
            var sd = 4.7 ;

        }else if(sportValue == "Australian football [AFL midfield]") {

           var mean = 62 ;
           var sd = 4.2 ;
      }else if(sportValue == "Australian football [AFL]") {

           var mean = 66 ;
           var sd = 5.7 ;
      }else if(sportValue == "badminton") {

           var mean = 61.9 ;
           var sd = 4.6 ;
      }else if(sportValue == "baseball") {

           var mean = 56.6 ;
           var sd = 4.9 ;
      }else if(sportValue == "basketball") {

           var mean = 71.9 ;
           var sd = 5.8 ;
      }else if(sportValue == "bodybuilding") {

           var mean = 39.7 ;
           var sd = 3.2 ;
      }else if(sportValue == "boxing - general") {

           var mean = 60.5 ;
           var sd = 4.8 ;
      }else if(sportValue == "boxing - heavyweight") {

           var mean = 58.3 ;
           var sd = 4.7 ;
      }else if(sportValue == "canoe polo") {

           var mean = 60.4 ;
           var sd = 4.8 ;
      }else if(sportValue == "canoeing (Canadian)") {

           var mean = 58.9 ;
           var sd = 4.7 ;
      }else if(sportValue == "cricket") {

           var mean = 58.4 ;
           var sd = 4.7 ;
      }else if(sportValue == "cycling - mountain bike") {

           var mean = 57.7 ;
           var sd = 4.6 ;
      }else if(sportValue == "cycling - road") {

           var mean = 56.2 ;
           var sd = 4.5 ;
      }else if(sportValue == "cycling - track sprint") {

           var mean = 66.8 ;
           var sd = 5.3 ;
      }else if(sportValue == "decathlon") {

           var mean = 62.9 ;
           var sd = 5 ;
      }else if(sportValue == "discus") {

           var mean = 45.6 ;
           var sd = 3.6 ;
      }else if(sportValue == "diving") {

           var mean = 51.2 ;
           var sd = 4.1 ;
      }else if(sportValue == "fencing") {

           var mean = 57 ;
           var sd = 4.6 ;
      }else if(sportValue == "golf") {

           var mean = 46.3 ;
           var sd = 4.1 ;
      }else if(sportValue == "gymnastics") {

           var mean = 57.5 ;
           var sd = 3.8 ;
      }else if(sportValue == "handball") {

           var mean = 67.6 ;
           var sd = 5.4 ;
      }else if(sportValue == "high jump") {

           var mean = 70.9 ;
           var sd = 5.7 ;
      }else if(sportValue == "hockey (field)") {

           var mean = 61.4 ;
           var sd = 4.9 ;
      }else if(sportValue == "hockey (ice)") {

           var mean = 58.1 ;
           var sd = 4.6 ;
      }else if(sportValue == "hurdles") {

           var mean = 67.9 ;
           var sd = 5.1 ;
      }else if(sportValue == "javelin") {

           var mean = 47.9 ;
           var sd = 4.2 ;
      }else if(sportValue == "jockey") {

           var mean = 45 ;
           var sd = 4.5 ;
      }else if(sportValue == "judo") {

           var mean = 52.2 ;
           var sd = 5.9 ;
      }else if(sportValue == "karate") {

           var mean = 61.7 ;
           var sd = 4.9 ;
      }else if(sportValue == "kayak - general") {

           var mean = 62.6 ;
           var sd = 5 ;
      }else if(sportValue == "kayak - marathon") {

           var mean = 59.1 ;
           var sd = 4.7 ;
      }else if(sportValue == "kayak - slalom") {

           var mean = 62.8 ;
           var sd = 5 ;
      }else if(sportValue == "kayak- sprint") {

           var mean = 62.3 ;
           var sd = 5 ;
      }else if(sportValue == "lacrosse") {

           var mean = 61.6 ;
           var sd = 4.9 ;
      }else if(sportValue == "long jump") {

           var mean = 69.2 ;
           var sd = 5.2 ;
      }else if(sportValue == "orienteering") {

           var mean = 59.7 ;
           var sd = 4.8 ;
      }else if(sportValue == "powerlifting") {

           var mean = 58.9 ;
           var sd = 4.7 ;
      }else if(sportValue == "rockclimbing") {

           var mean = 56.3 ;
           var sd = 5.5 ;
      }else if(sportValue == "rollerskating") {

           var mean = 53.8 ;
           var sd = 5.2 ;
      }else if(sportValue == "rowing - heavyweight") {

           var mean = 66 ;
           var sd = 5.3 ;
      }else if(sportValue == "rowing - lightweight") {

           var mean = 66.4 ;
           var sd = 5.3 ;
      }else if(sportValue == "rugby League - backs") {

           var mean = 51.3 ;
           var sd = 4.7 ;
      }else if(sportValue == "rugby League - forwards") {

           var mean = 49.5 ;
           var sd = 3.6 ;
      }else if(sportValue == "rugby union") {

           var mean = 55.5 ;
           var sd = 4.9 ;
      }else if(sportValue == "running - distance") {

           var mean = 56.1 ;
           var sd = 4.5 ;
      }else if(sportValue == "running - middle distance") {

           var mean = 61 ;
           var sd = 4.9 ;
      }else if(sportValue == "running - sprint") {

           var mean = 67.4 ;
           var sd = 5.4 ;
      }else if(sportValue == "sailing") {

           var mean = 57.4 ;
           var sd = 4.6 ;
      }else if(sportValue == "shooting") {

           var mean = 58.8 ;
           var sd = 4.7 ;
      }else if(sportValue == "shot put") {

           var mean = 55.7 ;
           var sd = 4.5 ;
      }else if(sportValue == "skating - figure") {

           var mean = 47.3 ;
           var sd = 2 ;
      }else if(sportValue == "soccer") {

           var mean = 64.4 ;
           var sd = 5.1 ;
      }else if(sportValue == "squash") {

           var mean = 60.7 ;
           var sd = 4.9 ;
      }else if(sportValue == "sumo wrestling") {

           var mean = 37.5   ;
           var sd = 3 ;
      }else if(sportValue == "surfing") {

           var mean = 57.9 ;
           var sd = 4.6 ;
      }else if(sportValue == "swimming") {

           var mean = 56.9 ;
           var sd = 4.6 ;
      }else if(sportValue == "table tennis") {

           var mean = 47.2 ;
           var sd = 4.5 ;
      }else if(sportValue == "tennis") {

           var mean = 65.4 ;
           var sd = 5.2 ;
      }else if(sportValue == "ten-pin bowling") {

           var mean = 58.8 ;
           var sd = 4.7 ;
      }else if(sportValue == "triathlon") {

           var mean = 57.1 ;
           var sd = 4.6 ;
      }else if(sportValue == "volleyball") {

           var mean = 71 ;
           var sd = 5.7 ;
      }else if(sportValue == "walking") {

           var mean = 55.4 ;
           var sd = 4.4 ;
      }else if(sportValue == "waterpolo") {

           var mean = 58.6 ;
           var sd = 4.7 ;
      }else if(sportValue == "weightlifting") {

           var mean = 45.2 ;
           var sd = 3.6 ;
      }else if(sportValue == "wrestling") {

          var mean = 51.5 ;
          var sd = 4.1 ;
      }

    }

  // Female
    else if(document.getElementById('gender').value == "Female") {

        if(sportValue == "archery")
        {
            var mean = 36.6 ;
            var sd = 2.9 ;

        }else if(sportValue == "badminton") {

           var mean = 50 ;
           var sd = 3 ;
      }else if(sportValue == "basketball") {

           var mean = 54.6 ;
           var sd = 4.4 ;
      }else if(sportValue == "bodybuilding") {

           var mean = 39.4 ;
           var sd = 3.1 ;
      }else if(sportValue == "cricket") {

           var mean = 35.9 ;
           var sd = 2.9 ;
      }else if(sportValue == "cycling - mountain bike") {

           var mean = 36.2 ;
           var sd = 2.9 ;
      }else if(sportValue == "cycling - road") {

           var mean = 36.2 ;
           var sd = 2.9 ;
      }else if(sportValue == "cycling - track sprint") {

           var mean = 52.7 ;
           var sd = 4.8 ;
      }else if(sportValue == "discus") {

           var mean = 33.1 ;
           var sd = 4.2 ;
      }else if(sportValue == "diving") {

           var mean = 49.6 ;
           var sd = 4 ;
      }else if(sportValue == "fencing") {

           var mean = 35 ;
           var sd = 2.8 ;
      }else if(sportValue == "golf") {

           var mean = 36 ;
           var sd = 2.9 ;
      }else if(sportValue == "gymnastics") {

           var mean = 47.5 ;
           var sd = 4.3 ;
      }else if(sportValue == "handball") {

           var mean = 38.5 ;
           var sd = 3.1 ;
      }else if(sportValue == "heptathlon") {

           var mean = 41.4 ;
           var sd = 3.3 ;
      }else if(sportValue == "high jump") {

           var mean = 57.3 ;
           var sd = 4.6 ;
      }else if(sportValue == "hockey (field)") {

           var mean = 36.3 ;
           var sd = 2.9 ;
      }else if(sportValue == "hurdles") {

           var mean = 40.2 ;
           var sd = 3.2 ;
      }else if(sportValue == "javelin") {

           var mean = 41.6 ;
           var sd = 3.3 ;
      }else if(sportValue == "judo") {

           var mean = 34 ;
           var sd = 5 ;
      }else if(sportValue == "karate") {

           var mean = 48.1 ;
           var sd = 3.9 ;
      }else if(sportValue == "kayak - general") {

           var mean = 36.5 ;
           var sd = 36.5 ;
      }else if(sportValue == "kayak - marathon") {

           var mean = 39.2 ;
           var sd = 3.1 ;
      }else if(sportValue == "kayak - slalom") {

           var mean = 37.9 ;
           var sd = 3 ;
      }else if(sportValue == "kayak- sprint") {

           var mean = 40.6 ;
           var sd = 6.2 ;
      }else if(sportValue == "lacrosse") {

           var mean = 36.1 ;
           var sd = 2.9 ;
      }else if(sportValue == "long jump") {

           var mean = 51.4 ;
           var sd = 5.1 ;
      }else if(sportValue == "orienteering") {

           var mean = 37.3 ;
           var sd = 3 ;
      }else if(sportValue == "netball") {

           var mean = 58 ;
           var sd = 4.2 ;
      }else if(sportValue == "rockclimbing") {

           var mean = 43 ;
           var sd = 5 ;
      }else if(sportValue == "rollerskating") {

           var mean = 39.9 ;
           var sd = 4.3 ;
      }else if(sportValue == "rowing - heavyweight") {

           var mean = 36.6 ;
           var sd = 2.9 ;
      }else if(sportValue == "rowing - lightweight") {

           var mean = 40 ;
           var sd = 3.2 ;
      }else if(sportValue == "rugby union") {

           var mean = 34.5 ;
           var sd = 2.8 ;
      }else if(sportValue == "running - distance") {

           var mean = 37.5 ;
           var sd = 3 ;
      }else if(sportValue == "running - middle distance") {

           var mean = 38.6 ;
           var sd = 3.1 ;
      }else if(sportValue == "running - sprint") {

           var mean = 40.6 ;
           var sd = 3.2 ;
      }else if(sportValue == "sailing") {

           var mean = 37.1 ;
           var sd = 3.8 ;
      }else if(sportValue == "shooting") {

           var mean = 36.6 ;
           var sd = 2.9 ;
      }else if(sportValue == "shot put") {

           var mean = 41 ;
           var sd = 3.3 ;
      }else if(sportValue == "skating - figure") {

           var mean = 37 ;
           var sd = 2.5 ;
      }else if(sportValue == "soccer") {

           var mean = 37.4 ;
           var sd = 3 ;
      }else if(sportValue == "softball") {

           var mean = 39.4 ;
           var sd = 3.2 ;
      }else if(sportValue == "squash") {

           var mean = 37.4 ;
           var sd = 3 ;
      }else if(sportValue == "surfing") {

           var mean = 36.5 ;
           var sd = 2.9 ;
      }else if(sportValue == "swimming") {

           var mean = 38.3 ;
           var sd = 3.1 ;
      }else if(sportValue == "synchronised swimming") {

           var mean = 37.2 ;
           var sd = 3 ;
      }else if(sportValue == "table tennis") {

           var mean = 37.8 ;
           var sd = 2.9 ;
      }else if(sportValue == "tennis") {

           var mean = 40.7 ;
           var sd = 3.3 ;
      }else if(sportValue == "ten-pin bowling") {

           var mean = 36.6 ;
           var sd = 2.9 ;
      }else if(sportValue == "triathlon") {

           var mean = 36.6 ;
           var sd = 2.9 ;
      }else if(sportValue == "volleyball") {

           var mean = 54 ;
           var sd = 4.3 ;
      }else if(sportValue == "walking") {

           var mean = 36.2 ;
           var sd = 3.4 ;
      }else if(sportValue == "waterpolo") {

           var mean = 38.8 ;
           var sd = 3.1 ;
      }

    }



            if(mean < testmean)
           {
             if(mean < (parseFloat(testmean) / 2))
             {
              if(mean >= 0 && mean < ((parseFloat(testmean) / 2) - 6))
                {
                   var sportPlot = '1 in 1_1' ;
                }
             else if(mean >= ((parseFloat(testmean) / 2) - 6) && mean < ((parseFloat(testmean) / 2) - 4))
                {
                   var sportPlot = '1 in 1_2' ;
                }
             else if(mean >= ((parseFloat(testmean) / 2) - 4) && mean < ((parseFloat(testmean) / 2) - 2))
                {
                   var sportPlot = '1 in 1_3' ;
                }
             else if(mean >= ((parseFloat(testmean) / 2) - 2) && mean < (parseFloat(testmean) / 2))
                {
                   var sportPlot = '1 in 1_4' ;
                }
             }
             else{

             if(mean >= (parseFloat(testmean) / 2) && mean < ((parseFloat(testmean) / 2) + 2))
                {
                   var sportPlot = '1 in 1_5' ;
                }
             else if(mean >= ((parseFloat(testmean) / 2) + 2) && mean < ((parseFloat(testmean) / 2) + 4))
                {
                  var sportPlot = '1 in 1_6' ;
                }
             else if(mean >= ((parseFloat(testmean) / 2) + 4) && mean < ((parseFloat(testmean) / 2) + 6))
                {
                  var sportPlot = '1 in 1_7' ;
                }
             else if(mean >= ((parseFloat(testmean) / 2) + 6) && mean < testmean)
                {
                   var sportPlot = '1 in 1_8' ;
                }
             }
           }

           else if(mean >= testmean && mean < (parseFloat(testmean) + 1))
           {
              var sportPlot = '1 in 2' ;
           }

          else if(mean >= (parseFloat(testmean) + 1) && mean < testmean15)
           {
               if(mean >= (parseFloat(testmean) + 1) && mean < (parseFloat(testmean) + 2))
               {
                 var sportPlot = '1 in 3_1' ;
               }
               else if(mean >= (parseFloat(testmean) + 2) && mean < (parseFloat(testmean) + 3))
               {
                 var sportPlot = '1 in 3_2' ;
               }
               else if(mean >= (parseFloat(testmean) + 3) && mean < testmean15)
               {
                 var sportPlot = '1 in 3_3' ;
               }

           }

          else if(mean >= testmean15 && mean < testmean14)
           {
              var sportPlot = '1 in 5' ;
           }
           else if(mean >= testmean14 && mean < testmean13)
           {
              var sportPlot = '1 in 10' ;
           }
           else if(mean >= testmean13 && mean < testmean12)
           {
              var sportPlot = '1 in 20' ;
           }
           else if(mean >= testmean12 && mean < testmean11)
           {
              var sportPlot = '1 in 50' ;
           }
           else if(mean >= testmean11 && mean < testmean10)
           {
              var sportPlot = '1 in 100' ;
           }
           else if(mean >= testmean10 && mean < testmean9)
           {
              var sportPlot = '1 in 200' ;
           }
           else if(mean >= testmean9 && mean < testmean8)
           {
              var sportPlot = '1 in 500' ;
           }
           else if(mean >= testmean8 && mean < testmean7)
           {
              var sportPlot = '1 in 1000' ;
           }
           else if(mean >= testmean7 && mean < testmean6)
           {
              var sportPlot = '1 in 2,500' ;
           }
           else if(mean >= testmean6 && mean < testmean5)
           {
              var sportPlot = '1 in 5,000' ;
           }
           else if(mean >= testmean5 && mean < testmean4)
           {
              var sportPlot = '1 in 10,000' ;
           }
           else if(mean >= testmean4 && mean < testmean3)
           {
              var sportPlot = '1 in 50,000' ;
           }
           else if(mean >= testmean3 && mean < testmean2)
           {
              var sportPlot = '1 in 100,000' ;
           }
           else if(mean >= testmean2 && mean < testmean1)
           {
              var sportPlot = '1 in 1,000,000' ;
           }
           else if(mean >= testmean1)
           {
              var sportPlot = '1 in 10,000,000' ;
           }

           document.getElementById("sportPlot").value = sportPlot ;

           document.getElementById("sportMeanScore").value = mean ; // store mean value of sport selected


  }



    function show()
    {
        var score = document.getElementById("scorePlot").value ;

         if (document.getElementById("vo2Max_value").value == "" || document.getElementById("vo2Max_value").value == undefined)
           {
               alert ("No values have been entered");
               return false;
           }

      else
      {
        if(score == '1 in 1_1')
        {
           var div=document.getElementById('plot18_1');
           div.style.display = "block" ;

        }
        else if(score == '1 in 1_2')
        {
           var div=document.getElementById('plot18_2');
           div.style.display = "block" ;

        }
        else if(score == '1 in 1_3')
        {
           var div=document.getElementById('plot18_3');
           div.style.display = "block" ;

        }
        else if(score == '1 in 1_4')
        {
           var div=document.getElementById('plot18_4');
           div.style.display = "block" ;

        }
        else if(score == '1 in 1_5')
        {
           var div=document.getElementById('plot18_5');
           div.style.display = "block" ;

        }
        else if(score == '1 in 1_6')
        {
           var div=document.getElementById('plot18_6');
           div.style.display = "block" ;

        }
        else if(score == '1 in 1_7')
        {
           var div=document.getElementById('plot18_7');
           div.style.display = "block" ;

        }
        else if(score == '1 in 1_8')
        {
           var div=document.getElementById('plot18_8');
           div.style.display = "block" ;

        }
        else if(score == '1 in 2')
        {
           var div=document.getElementById('plot17');
           div.style.display = "block" ;

        }
        else if(score == '1 in 3_1')
        {
           var div=document.getElementById('plot16_1');
           div.style.display = "block" ;

        }
        else if(score == '1 in 3_2')
        {
           var div=document.getElementById('plot16_2');
           div.style.display = "block" ;

        }
        else if(score == '1 in 3_3')
        {
           var div=document.getElementById('plot16_3');
           div.style.display = "block" ;

        }
        else if(score == '1 in 5')
        {
           var div=document.getElementById('plot15');
           div.style.display = "block" ;

        }
        else if(score == '1 in 10') {

           var div=document.getElementById('plot14');
           div.style.display = "block" ;

      }
      else if(score == '1 in 20') {

          var div=document.getElementById('plot13');
           div.style.display = "block" ;

      }
      else if(score == '1 in 50') {

           var div=document.getElementById('plot12');
           div.style.display = "block" ;

      }
      else if(score == '1 in 100') {

           var div=document.getElementById('plot11');
           div.style.display = "block" ;

      }
      else if(score == '1 in 200') {

           var div=document.getElementById('plot10');
           div.style.display = "block" ;

      }
      else if(score == '1 in 500') {

           var div=document.getElementById('plot9');
           div.style.display = "block" ;

      }
      else if(score == '1 in 1000') {

           var div=document.getElementById('plot8');
           div.style.display = "block" ;

      }
      else if(score == '1 in 2,500') {

           var div=document.getElementById('plot7');
           div.style.display = "block" ;

      }
      else if(score == '1 in 5,000') {

           var div=document.getElementById('plot6');
           div.style.display = "block" ;

      }
      else if(score == '1 in 10,000') {

           var div=document.getElementById('plot5');
           div.style.display = "block" ;

      }
      else if(score == '1 in 50,000') {

           var div=document.getElementById('plot4');
           div.style.display = "block" ;

      }
      else if(score == '1 in 100,000') {

           var div=document.getElementById('plot3');
           div.style.display = "block" ;

      }
      else if(score == '1 in 1,000,000') {

           var div=document.getElementById('plot2');
           div.style.display = "block" ;

      }
      else if(score == '1 in 10,000,000') {

          var div=document.getElementById('plot1');
          div.style.display = "block" ;
      }



    }

        showSport() ;
  }


  function showSport()
    {
        var sport = document.getElementById("sportPlot").value ;
        var sportMean = document.getElementById('sportMeanScore').value ;

         if (document.getElementById("vo2Max_value").value == "" || document.getElementById("vo2Max_value").value == undefined)
           {
               alert ("No values have been entered");
               return false;
           }

        else
      {

        if(sport == '1 in 1_1')
        {
           var div=document.getElementById('score18_1');
           div.style.display = "block" ;

        }
        else if(sport == '1 in 1_2')
        {
           var div=document.getElementById('score18_2');
           div.style.display = "block" ;

        }
        else if(sport == '1 in 1_3')
        {
           var div=document.getElementById('score18_3');
           div.style.display = "block" ;

        }
        else if(sport == '1 in 1_4')
        {
           var div=document.getElementById('score18_4');
           div.style.display = "block" ;

        }
        else if(sport == '1 in 1_5')
        {
           var div=document.getElementById('score18_5');
           div.style.display = "block" ;

        }
        else if(sport == '1 in 1_6')
        {
           var div=document.getElementById('score18_6');
           div.style.display = "block" ;

        }
        else if(sport == '1 in 1_7')
        {
           var div=document.getElementById('score18_7');
           div.style.display = "block" ;

        }
        else if(sport == '1 in 1_8')
        {
           var div=document.getElementById('score18_8');
           div.style.display = "block" ;

        }
        else if(sport == '1 in 2')
        {
           var div=document.getElementById('score17');
           div.style.display = "block" ;

        }
        else if(sport == '1 in 3_1')
        {
           var div=document.getElementById('score16_1');
           div.style.display = "block" ;

        }
        else if(sport == '1 in 3_2')
        {
           var div=document.getElementById('score16_2');
           div.style.display = "block" ;

        }
        else if(sport == '1 in 3_3')
        {
           var div=document.getElementById('score16_3');
           div.style.display = "block" ;

        }

       else if(sport == '1 in 5')
        {
           var div=document.getElementById('score15');
           div.style.display = "block" ;

        }
        else if(sport == '1 in 10') {

           var div=document.getElementById('score14');
           div.style.display = "block" ;

      }
      else if(sport == '1 in 20') {

          var div=document.getElementById('score13');
           div.style.display = "block" ;

      }
      else if(sport == '1 in 50') {

           var div=document.getElementById('score12');
           div.style.display = "block" ;

      }
      else if(sport == '1 in 100') {

           var div=document.getElementById('score11');
           div.style.display = "block" ;

      }
      else if(sport == '1 in 200') {

           var div=document.getElementById('score10');
           div.style.display = "block" ;

      }
      else if(sport == '1 in 500') {

           var div=document.getElementById('score9');
           div.style.display = "block" ;

      }
      else if(sport == '1 in 1000') {

           var div=document.getElementById('score8');
           div.style.display = "block" ;

      }
      else if(sport == '1 in 2,500') {

           var div=document.getElementById('score7');
           div.style.display = "block" ;

      }
      else if(sport == '1 in 5,000') {

           var div=document.getElementById('score6');
           div.style.display = "block" ;

      }
      else if(sport == '1 in 10,000') {

           var div=document.getElementById('score5');
           div.style.display = "block" ;

      }
      else if(sport == '1 in 50,000') {

           var div=document.getElementById('score4');
           div.style.display = "block" ;

      }
      else if(sport == '1 in 100,000') {

           var div=document.getElementById('score3');
           div.style.display = "block" ;

      }
      else if(sport == '1 in 1,000,000') {

           var div=document.getElementById('score2');
           div.style.display = "block" ;

      }
      else if(sport == '1 in 10,000,000') {

          var div=document.getElementById('score1');
          div.style.display = "block" ;
      }

    }

       if(sportMean == 'undefined')
      {
        document.getElementById('sportMeanVal').innerHTML = "" ;
      }
      else
      {
          document.getElementById('sportMeanVal').innerHTML = "["+sportMean+"]" ;
      }


  }
