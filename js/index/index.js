var title;//新闻标题
var digest;//新闻文摘
var picInfo;//新闻配图

var list=$('.media-list');//右侧新闻面板
var menu=$('.list-group-item');//左侧栏目
var status;//左侧栏目状态

$(document).ready(function(){
    
    
    menu.focus(function()
    {
    	$(this).css('background-color','#337AB7');
    });
    menu.blur(function()
    {
    	$(this).css('background-color','#FFFFFF');
    });
    
    
    
     
    $.ajax({
		type:"post",
		url:"https://www.apiopen.top/journalismApi",
		dataType:"json",
		success:function(datajson)
		{			
			
			$.each(datajson,function(infoIndex1,info1)
			{
				if(infoIndex1 == 'data')
				{
				    $.each(info1,function(infoIndex2,info2)
				    {
				    	if(infoIndex2 == 'dy')
				    	{
				    		$.each(info2,function(infoIndex3,info3)
				    		{				    			
				    		    
				    		    title=info3.title;
				    		    digest=info3.digest;
				    		    
				    		    for(var i=0;i<info3.picInfo.length;i++)
				    		    {
				    		    	picInfo=info3.picInfo[i].url;
				    		    
				    		    }
				    		    
				    		    if(title!=null || digest!=null)
				    		    {
				    		    	list.append("<li class='media'><div class='media-left'><a href='#'><img class='media-object' src='"+picInfo+"' alt='aaa'></a></div><div class='media-body'><h4 class='media-heading'>"+title+"</h4>"+digest+"</div></li>");
				    		    	list.stop().fadeIn(800);
				    		    }
				    		    		    			
				    		});
				    	}
				    	
				    });
					
					
				}
				
				
				
			});
			
		       			
		}
		
	});
		
	
});



menu.click(function()
{
	
	// msg 获取点击的栏目
	var msg=$(this).text();
	
	switch (msg){
		
		case '财经':
		    status='money';
			break;
		case '娱乐':
		    status='ent';      
			break;
		case '科技':
		    status='tech';      
			break;
		case '军事':
		    status='war';
			break;
		case '运动':
		    status='sports';      
			break;
		case '推荐':
		    status='dy';      
			break;
		case '汽车':
		    status='auto';      
			break;
		case '新闻':
		    status='toutiao';
			break;
		
	}
	
       list.stop().fadeOut(800);  
       list.empty();//删除ul子元素  
	
	$.ajax({
		type:"post",
		url:"https://www.apiopen.top/journalismApi",
		dataType:"json",
		success:function(datajson)
		{
			
			$.each(datajson,function(infoIndex1,info1)
			{
				if(infoIndex1 == 'data')
				{
				    $.each(info1,function(infoIndex2,info2)
				    {
				    	if(infoIndex2 == status)
				    	{
				    		$.each(info2,function(infoIndex3,info3)
				    		{				    			
				    		    
				    		    title=info3.title;
				    		    digest=info3.digest;
				    		    
				    		    for(var i=0;i<info3.picInfo.length;i++)
				    		    {
				    		    	picInfo=info3.picInfo[i].url;
				    		    }
				    		    
				    		    if(title!=null || digest!=null)
				    		    {				    		    	
				    		    	list.append("<li class='media'><div class='media-left'><a href='#'><img class='media-object' src='"+picInfo+"' alt='aaa'></a></div><div class='media-body'><h4 class='media-heading'>"+title+"</h4>"+digest+"</div></li>");
				    		    	list.stop().fadeIn(800);
				    		    }
				    		    		    			
				    		});
				    	}
				    	
				    });
					
					
				}
				
				
				
			});
			
		       			
		}
		
	});
	
	
	
	
});
//置顶按钮
menu.click(function()
{
	if($(this).text() == '置顶')
	{	    
	    $("html,body").stop().animate({scrollTop:0}, 1000);	    
	}	
});
