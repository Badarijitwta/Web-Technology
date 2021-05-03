function insert(number){
            document.form.textview.value = document.form.textview.value+number;
        }
function equal(){
        let expression = document.form.textview.value;
                if(expression){
                    document.form.textview.value = eval(expression)
                }
                else{
                    console.result('Not the right way')
                }
            }
function c(){
         document.form.textview.value = null;
        }
