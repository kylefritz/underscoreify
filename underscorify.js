(function() {
  var el=document.createElement('div'),
      b=document.getElementsByTagName('body')[0],
      otherlib=false,
      msg='';
  el.style.position='fixed';
  el.style.height='32px';
  el.style.width='220px';
  el.style.marginLeft='-110px';
  el.style.top='0';
  el.style.left='50%';
  el.style.padding='5px 10px';
  el.style.zIndex = 1001;
  el.style.fontSize='12px';
  el.style.color='#222';
  el.style.backgroundColor='#f99';
 
  if(typeof _!='undefined') {
    msg='This page already using underscore v'+_.VERSION;
    return showMsg();
  } else if (typeof $=='function') {
  }
 
  // more or less stolen form jquery core and adapted by paul irish
  function getScript(url,success){
    var script=document.createElement('script');
    script.src=url;
    var head=document.getElementsByTagName('head')[0],
        done=false;
    // Attach handlers for all browsers
    script.onload=script.onreadystatechange = function(){
      if ( !done && (!this.readyState
           || this.readyState == 'loaded'
           || this.readyState == 'complete') ) {
        done=true;
        success();
        script.onload = script.onreadystatechange = null;
        head.removeChild(script);
      }
    };
    head.appendChild(script);
  }
  getScript('http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.1.7/underscore-min.js',function() {
    if (typeof _=='undefined') {
      msg='Sorry, but underscore wasn\'t able to load';
    } else {
      msg='This page is now underscorified with v' + _.VERSION;

    }
    return showMsg();
  });
  function showMsg() {
    el.innerHTML=msg;
    b.appendChild(el);
    window.setTimeout(function() {

        b.removeChild(el);

    } ,2500);    
  }
})();