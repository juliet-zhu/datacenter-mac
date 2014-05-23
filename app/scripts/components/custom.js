/* JS *//* Navigation */(function($,document,window){  $(function(){    // DOM is ready    $(window).resize(function(){      if($(window).width() >= 765){        $(".sidebar #nav").slideDown(350);      }      else{        $(".sidebar #nav").slideUp(350);       }    });    if($("#nav > li > a").hasClass('subdrop')){      $("#nav > li > a").each(function(){        $(this).next('ul').show();      });      }    $("#nav > li > a").on('click',function(e){      if($(this).parent().hasClass("has_sub")) {        e.preventDefault();        if(!$(this).hasClass('subdrop')){          $(this).next('ul').slideDown(350);          $(this).addClass("subdrop");        }else if($(this).hasClass("subdrop")){          $(this).removeClass("subdrop");          $(this).next("ul").slideUp(350);        }       }else{        if(!$(this).hasClass('subdrop')){          $(this).parents('#nav').find('li:not(".has_sub")>a').removeClass('subdrop');          $(this).addClass("subdrop");        }      }    });    $(".sidebar-dropdown a").on('click',function(e){      e.preventDefault();      if(!$(this).hasClass("open")) {        // hide any open menus and remove all other classes        $(".sidebar #nav").slideUp(350);        $(".sidebar-dropdown a").removeClass("open");                // open our new menu and add the open class        $(".sidebar #nav").slideDown(350);        $(this).addClass("open");      }else if($(this).hasClass("open")) {        $(this).removeClass("open");        $(".sidebar #nav").slideUp(350);      }    });  });})(window.jQuery,document,window);/* Widget */(function($,document,window){  $(function(){    /* Widget close */    $('.wclose').click(function(e){      e.preventDefault();      var $wbox = $(this).parent().parent().parent();      $wbox.hide(100);    });    /* Widget minimize */    $('.wminimize').click(function(e){      e.preventDefault();      var $wcontent = $(this).parent().parent().next('.widget-content');      if($wcontent.is(':visible'))       {        $(this).children('i').removeClass('icon-chevron-up');        $(this).children('i').addClass('icon-chevron-down');      }      else       {        $(this).children('i').removeClass('icon-chevron-down');        $(this).children('i').addClass('icon-chevron-up');      }                  $wcontent.toggle(500);    });   });})(window.jQuery,document,window);/* jQuery chosen */(function($,document,$selectWithSearch,$selectReportHead){  $(function(){    if($selectWithSearch){      $selectWithSearch.chosen({width: "100%"});    }    if($selectReportHead){      $selectReportHead.chosen({disable_search_threshold: 5,width:'60%',class:'select-report-head'});    }  });})(window.jQuery,document,$('.select-with-search')||undefined,$('#select-report-head')||undefined);/* Package-channel-new validate */(function($,document,$packageChannelNewForm){  $(function(){    if($packageChannelNewForm){      $packageChannelNewForm.validate({        rules:{          channelID:{            required:true,            channelID:[2,16]          },          channelName:{            required:true,            channelName:[2,12]          },          channelScale:{            range:[0,100]          }        },        errorClass:'error',        validClass:'success',        highlight:function(element){          $(element).addClass('highlight-error').removeClass('highlight-success');        },        unhighlight:function(element){          $(element).removeClass('highlight-error').addClass('highlight-success');        },        errorPlacement:function(error,element){          error.insertAfter(element);        }      });    }      });})(window.jQuery,document,$('#packageChannelNewForm')||undefined);/* Package-channel-edit validate */(function($,document,$packageChannelEditForm){  $(function(){    if($packageChannelEditForm){      $packageChannelEditForm.validate({        rules:{          channelName:{            required:true,            channelName:[2,12]          },          channelScale:{            range:[0,100]          }        },        errorClass:'error',        validClass:'success',        highlight:function(element){          $(element).addClass('highlight-error').removeClass('highlight-success');        },        unhighlight:function(element){          $(element).removeClass('highlight-error').addClass('highlight-success');        },        errorPlacement:function(error,element){          error.insertAfter(element);        }      });    }      });})(window.jQuery,document,$('#packageChannelEditForm')||undefined);/* Payment-channel-new validate */(function($,document,$paymentChannelNewForm){  $(function(){    if($paymentChannelNewForm){      $paymentChannelNewForm.validate({        rules:{          channelID:{            required:true,            channelID:[2,16]          },          channelName:{            required:true,            channelName:[2,12]          }        },        errorClass:'error',        validClass:'success',        highlight:function(element){          $(element).addClass('highlight-error').removeClass('highlight-success');        },        unhighlight:function(element){          $(element).removeClass('highlight-error').addClass('highlight-success');        },        errorPlacement:function(error,element){          error.insertAfter(element);        }      });    }  });})(window.jQuery,document,$('#paymentChannelNewForm')||undefined);/* Payment-channel-edit validate */(function($,document,$paymentChannelEditForm){  $(function(){    if($paymentChannelEditForm){      $paymentChannelEditForm.validate({        rules:{          channelName:{            required:true,            channelName:[2,12]          }        },        errorClass:'error',        validClass:'success',        highlight:function(element){          $(element).addClass('highlight-error').removeClass('highlight-success');        },        unhighlight:function(element){          $(element).removeClass('highlight-error').addClass('highlight-success');        },        errorPlacement:function(error,element){          error.insertAfter(element);        }      });    }  });})(window.jQuery,document,$('#paymentChannelEditForm')||undefined);/* Tooltip */(function($,document,$toolTipBox){  $(function(){    if($toolTipBox){      $toolTipBox.tooltip();    }  });})(window.jQuery,document,$('.tooltipbox')||undefined);  /* Filter search button */(function($,document){  $(function(){    if($('#filterBtn')){      $('#filterBtn').unbind('click').bind('click',function(e){        var $this = $(this),            $dropdownMenu = $this.next('.dropdown-menu');        if($dropdownMenu.css('display')=='block'){          $dropdownMenu.slideUp();        }else if($dropdownMenu.css('display')=='none'){          $dropdownMenu.slideDown();        }      })    }        /* 全选 */    if($('.checkAll')){      $('.checkAll').click(function(){          var $this = $(this),              $checkBoxs = $this.parents('.form-group').next().find('input[type="checkbox"]'),              checked = $checkBoxs.prop('checked'),              thisChecked = $(this).prop('checked'),              $checkBoxsLength = $checkBoxs.size();          if(thisChecked){            $this.parents('.form-group-box').find('.checkInverse').prop('checked',false);            $checkBoxs.each(function(){              $(this).prop('checked',true);            });          }else{            $checkBoxs.each(function(){              $(this).prop('checked',false);            });          }      });          }     /* 反选 */    if($('.checkInverse')){      $('.checkInverse').click(function(){          var $this = $(this),              $checkBoxs = $this.parents('.form-group').next().find('input[type="checkbox"]'),              thisChecked = $(this).prop('checked');          if(thisChecked){            $this.parents('.form-group-box').find('.checkAll').prop('checked',false);            $checkBoxs.each(function(){            var checked = $(this).prop('checked');            if(checked){              $(this).prop('checked',false);            }else{              $(this).prop('checked',true);            }                      });          }else{            $checkBoxs.each(function(){              var checked = $(this).prop('checked');              if(checked){                $(this).prop('checked',false);              }else{                $(this).prop('checked',true);              }                          });          }      });          }    if($('.checkboxs')){      $('.checkboxs').find('input[type="checkbox"]').unbind('click').click(function(){        var $this = $(this),            length = $this.parents('.form-group-box').find(':checkbox:not(:checked)');            $this.parents('.form-horizontal').find('.checkInverse').prop('checked',false);            if(length){              $this.parents('.form-horizontal').find('.checkAll').prop('checked',false);            }      });    }         /* 筛选取消按钮 */    if($('#filterCloseBtn')){      $('#filterCloseBtn').click(function(e){        e.preventDefault();        $(this).parents('.dropdown-menu').slideUp();      });           }        if($('#filterApplyBtn')){      /* 筛选应用按钮 */      $('#filterApplyBtn').click(function(e){        e.preventDefault();        var $platforms = $('#filterPlatforms').find('input:checked'),            $channels = $('#filterChannels').find('input:checked'),            $servers = $('#filterServers').find('input:checked'),            platformNames = [],            channelNames = [],            serverNames = [],            platformNamesStr = "",            channelNamesStr = "",            serverNamesStr = "";        $platforms.each(function(){          platformNames.push($(this).parent().text());        });        $channels.each(function(){          channelNames.push($(this).parent().text());        });        $servers.each(function(){          serverNames.push($(this).parent().text());        });        $('#filterResultPlatforms').data('result',platformNames);        $('#filteResultChannels').data('result',channelNames);        $('#filterResultServers').data('result',serverNames);        platformNamesStr = platformNames.join(",");        channelNamesStr = channelNames.join(",");        serverNamesStr = serverNames.join(",");                if($platforms.size()>0){          platformNamesStr = platformNames[0].trim();          var platformNameLength = platformNamesStr.length;          console.log(platformNameLength);          if(platformNameLength>2){            platformNamesStr = platformNamesStr.substring(0,2)+'...';            console.log(platformNamesStr);          }          $('#filterResultPlatforms').find('span').html(platformNamesStr+'<i class="fa fa-caret-down ml5"></i>');        }else{          $('#filterResultPlatforms').find('span').text("全部");        }        if($channels.size()>0){          channelNamesStr = channelNames[0].trim();          var channelNameLength = channelNamesStr.length;          if(channelNameLength>2){            channelNamesStr = channelNamesStr.substring(0,2)+'...';          }          $('#filteResultChannels').find('span').html(channelNamesStr+'<i class="fa fa-caret-down ml5"></i>');        }else{          $('#filteResultChannels').find('span').text("全部");        }        if($servers.size()>0){          serverNamesStr = serverNames[0].trim();          var serverNameLength = serverNamesStr.length;          if(serverNameLength>2){            serverNamesStr = serverNamesStr.substring(0,2)+'...';          }          $('#filterResultServers').find('span').html(serverNamesStr+'<i class="fa fa-caret-down ml5"></i>');        }else{          $('#filterResultServers').find('span').text("全部");        }        $(this).parents('.dropdown-menu').slideUp();      });      /* 平台，渠道，服务器按钮点击事件 */      function showMenu(e){        e.preventDefault();        var $this = $(this),            data = $this.data('result'),            $dropdownMenu = $this.next('ul')            lis=[];        if(data){          $.each(data,function(i,el){            lis.push('<li>'+el+'</li>');          });          $dropdownMenu.empty().html(lis.join(""));        }                $('.nav-pills').find('.dropdown-menu').slideUp();        if($dropdownMenu.css('display')=='none'){          $dropdownMenu.slideDown();        }else{          $dropdownMenu.slideUp();        }      }      /* 平台，渠道，服务器按钮 */      $('#filterResultPlatforms').unbind('click').click(showMenu);      $('#filteResultChannels').unbind('click').click(showMenu);      $('#filterResultServers').unbind('click').click(showMenu);    }     });})(window.jQuery,document);/* StickUp */(function($,document,$reportSubnav){  $(function(){    //enabling stickUp on the '.navbar-wrapper' class    $(document).ready(function(){      if($reportSubnav){        $reportSubnav.stickUp();      }    })      });})(window.jQuery,document,$('#report .subnav')||undefined);/* Report datepicker */(function($,document,$reportDatepicker){  $(function(){    //enabling stickUp on the '.navbar-wrapper' class    if($reportDatepicker){      $('#reportDatepicker').daterangepicker({        startDate: moment().subtract('days', 7),        endDate: moment(),        minDate: '2013-01-01',        maxDate: '2020-12-31',        /* dateLimit: { days: 60 }, */        showDropdowns: false,        showWeekNumbers: true,        timePicker: false,        timePickerIncrement: 1,        timePicker12Hour: true,        showFromToLabel:false,        showCalendar:true,        customRangeLabel:false,        customRangeActive:false,        ranges: {           '今天': [moment(), moment()],           '上个自然周': [moment().subtract('week', 1).startOf('week'), moment().subtract('week', 1).endOf('week')],           '昨天': [moment().subtract('days', 1), moment().subtract('days', 1)],           '上个自然月': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')],           '最近7天': [moment().subtract('days', 6), moment()],           '全部': [moment(), moment()],           '最近30天': [moment().subtract('days', 29), moment()]        },        opens: 'left',        buttonClasses: ['btn btn-default'],        applyClass: 'btn-small btn-primary',        cancelClass: 'btn-small',        format: 'YYYY-MM-DD',        separator: ' - ',        locale: {            applyLabel: '应用',            cancelLabel:'取消',            customRangeLabel: 'Custom Range',            daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr','Sa'],            firstDay: 1        }      },function(start, end){        $('#reportDatepicker span').html(start.format("YYYY-MM-DD") + ' - ' + end.format("YYYY-MM-DD"));        $('#reportDatepicker span').html(moment().subtract('days', 29).format("YYYY-MM-DD") + ' - ' + moment().format("YYYY-MM-DD"));      });    }  });})(window.jQuery,document,$('#reportDatepicker')||undefined);/* 查看所有消息 */(function($,document,$moreMessage){  $(function(){    if($moreMessage){      $moreMessage.click(function(){        $.ajax({          url:'/show-message',//change it to yr application controler url          success:function(data){           data = $.parseJSON(data);            var html = "";            for (var i = 0;i<data.message.length;i++){              html+="<p>"+data.message[i]+"</p>"            }            $('#showAllMessages').find('.modal-body').empty().html(html);          },          error:function(){            alert('请求发生错误，稍后请重试');//TODO:replace alert with module.          }        });      });    }    })})(window.jQuery,document,$('#moreMessage')||undefined);/* custom scrollbar */(function($,document,$checkboxs){  $(function(){    if($checkboxs){      $checkboxs.mCustomScrollbar({theme:"dark"});    }  });})(window.jQuery,document,$('.checkboxs')||undefined);