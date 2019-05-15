<script type="text/javascript">
  
$(function($) {
	//POST
    $.post("index.php?route=dfrobot/main&uri=product/getCombination", { product_id: "1405" } ,
        function(data){

            //console.log(data.code)	
            //console.log(data.data.length)
            if(data.code == 1){
            	//循环
            	for(var i=0;i<data.data.length;i++){ 
				    //json转义方法1
				    var parseJSON = JSON.parse(data.data[i].value);
				    //console.log(parseJSON)
				    //json转义方法2 有点奇怪
				    var stringifyJSON = JSON.stringify(data.data[i].value);
				    //console.log(stringifyJSON)
				    //json转义方法3
				    var dataObj=eval("("+data.data[i].value+")");//转换为json对象 
	        		//console.log(dataObj)
	        		//json转义方法4
				    var parsedJson = jQuery.parseJSON(data.data[i].value);  
				    //console.log(parsedJson.length)
				    
				}

				for(var j=0;j<parsedJson.length;j++){ 
				    console.log(parsedJson[j].name,parsedJson[j].sku,parsedJson[j].product_id)
				}
            }
            
        });
});
</script>
