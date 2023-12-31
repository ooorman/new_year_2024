function delay(t) {
  return new Promise(resolve => setTimeout(resolve, t))
}
jQuery.fn.shake = function(interval,distance,times){
   interval = typeof interval == "undefined" ? 100 : interval;
   distance = typeof distance == "undefined" ? 10 : distance;
   times = typeof times == "undefined" ? 3 : times;
   var jTarget = $(this);
   jTarget.css('position','relative');
   for(var iter=0;iter<(times+1);iter++){
      jTarget.animate({ left: ((iter%2==0 ? distance : distance*-1))}, interval);
   }
   return jTarget.animate({ left: 0},interval);
}

$(document).ready(function() {
    console.log(window.performance);
    $('#floating_title').empty();
    $('#floating_text').empty();
    async function play_text_news(texts) {
        for (let i = 0; i < texts.length; i++) {
            $('#floating_text').css({'left':'100%'});
            $('#floating_title').text(texts[i].title);
            await delay(2000);
            let promise = new Promise((resolve, reject) => {
                $('#floating_title').empty();
                $('#floating_text').empty();

                $('#floating_text').html(texts[i].text);

                total_push = 0;
                a = setInterval(function() {

                    if (total_push < $('#news').width() + $('#floating_text').width()) {
                        total_push+=0.5;
                        $('#floating_text').css({'transform':`translate(-${total_push}px, -50%)`});
                    }else {
                        clearInterval(a);
                        resolve();
                    }
                }, 1);
            });
            await promise;
            await delay(2000);
        }
    }



    play_text_news([
        {text:'Мы ужасно скорбим о событиях в Белгороде. Такой беспердел и анархию представить невозможно. Как только могли синоптики ошибиться на 1 градус? Из за них в Белгороде люди одевались теплее и потом было жарко ходить.ヽ༼ ಠ益ಠ ༽ﾉ', title: 'События в Белгороде'},
        {text: 'В Вырице лето в самом разгаре, и яркое солнце приветствует нас каждый день! Сейчас температура поднимается до рекордных +31 градус Цельсия! Не забудьте надеть легкую одежду и защититься от солнца.', title:'О погоде'},
        {text: 'сколько мтвыа дыфвфыва выаемв ываваеп?', title:'Загадка тысячедения'},
        {text: 'Недавно, несмотря на все доказательства и научные подкрепления, на Украине нашли воду. Это невероятное событие всколыхнёт весь научный мир и наконец-то буде перемога.', title:'Что там на Украине?'},
        {text: 'Ровно 99.9999999% процентов росеян поддерживают Зеленского.', title:'Статистика'},
        {text: 'Военная база США в Мексике расстреляла толпу мигрантов. Но это не сравнится с потерями тупых укропов в бахмуте.', title:'База'},
        {text: 'Всем до свидания на этом новости закончились.', title:'Конец'}], 22);

    first_time = true
    $('#poop').mousedown(function(e) {
        audio = document.getElementById('poop_sound');
        audio.currentTime = 0;
        audio.play();
        if(first_time) $(this).prependTo('body');

        var windowWidth = $(window).width();
        var windowHeight = $(window).height();

        // Получаем размеры объекта для телепортации
        var objectWidth = $(this).width();
        var objectHeight = $(this).height();
        var randomX = Math.random() * (windowWidth - objectWidth);
        var randomY = Math.random() * (windowHeight - objectHeight);

        $(this).css({
            'position': 'absolute',
            'left': randomX + 'px',
            'top': randomY + 'px'
        });
    });
    $('#top_secret').click(function() {
        $('#skuff').show();
        $('#close_skuff').click(function() {
           $('#skuff').hide();
        });
    });
    $('#icon').on('click', function() {
        audio = document.getElementById('omnom');
        audio.currentTime = 0;
        audio.play();
    });
    $('#chatgpt').click(function() {

        $('#gpt_menu').show();
        $('#continue_system').click(function() {
            window.close();
        });
        $('#stop_system').click(function() {
            $('#gpt_menu').hide();
        });
    });
    $(document).snowfall({
		flakeCount: 200, // Количество снежинок
		flakeColor: 'white'
	});
    one_time = true
	$('#open_gifts').click(function() {
	    if(one_time) {
	        one_time = false;
            audio = document.getElementById('jingle').play();
            audio.volume = 1;
            $('#right_block').transition({filter: 'grayscale(0)'});

            $('#gift').on('click', function open_gifts() {
                $(this).unbind();
                $(this)
                .finish()
                .animate({
                    'top':'-20%'
                }, 1500)
                .shake()
                .animate({
                    'top':'-10%'
                }, {
                    duration:1000,
                    complete: function() {
                        $('#top_gift').transition({ y: '-130px', x:'-50%' });
                    }
                });
            });
        }

	});
	$('#strange_button').click(function() {
	    $('#poop').remove();
	    audio = document.getElementById('jingle').pause();
	    $('.snowfall-canvas').remove();
        $('.snowfall-flakes').each(function() {
            $(this).remove();
        });
        $('#white_styles').attr('disabled', true);
        $('#black_styles').attr('disabled', false);
        $('#open_gifts').text('dont tell');
        $('#open_gifts').click(function() {
            window.open(
                'https://youtu.be/79Li7UBhehs?si=i-kjUXU-Or1VNOHz',
                '_blank'
            );
        });
        $(document).snowfall({
            flakeCount: 200, // Количество снежинок
            flakeColor: 'red'
        });
        $('#top_gift').transition({ y: '-40px', x:'-50%' });
        $('#gift').transition({filter: 'hue-rotate(100deg) brightness(95%) contrast(1000%)'})
        .animate({
            'top':'0%'
        }, 1500);
        a = 'DONT TELL '.repeat(1000);
        play_text_news([{text: a, title: '??????????????????????????'}]);

        $('#icon').unbind().click(function() {
            audio = document.getElementById('open_door');
            audio.currentTime = 0;
            audio.play();
        });
        $('#left_block').remove();
        $('#left_block_cursed').show();
        $('#title_site').text('Двач');
        $('#title_site').attr('href','https://deathofcommunism.com/forum/');
	});
});