var image =  document.getElementById("TSA Logo");

            function changeColor()
            {
                if (image.getAttribute('src') == "logo-tsa.png")
                {
                    image.src = "tsa-color.png";
                }
                else
                {
                    image.src = "logo-tsa.png";
                }
            }
