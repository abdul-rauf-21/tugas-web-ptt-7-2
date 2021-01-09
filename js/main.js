// Import helper functions
import { select, selectAll, getData } from './helper.js';

// Ambil data-music dari class .music_name
const musicData = getData('.music_name', 'data-music');

// Mengubah judul sesuai dengan music yang dimainkan
const changeMusicTitle = (index) => select('.title').textContent = selectAll('.music_name')[index].textContent;

selectAll('button').forEach( (val, index) =>{
	val.addEventListener('click', function(){
		/* Load music jika atribut src dari audio source kosong atau jika index musik yang dimainkan
		 * tidak sesuai dengan index play button
		 */
		if( select('audio source').src == '' || select('audio source').getAttribute('data-index') != index ){
			select('audio source').setAttribute('src', musicData[index]);
			select('audio source').setAttribute('data-index', index);
			select('audio').load();
			/* Reset semua tombol menjadi play ketika tombol play lain ditekan ketika tombol lainnya
			 * sedang di pause
			 */
			for( const el of selectAll('.play') ) el.textContent = 'Play';
			selectAll('.play')[index].textContent = 'Pause';
		} else {
			if( select('audio').paused ){
				selectAll('.play')[index].textContent = 'Pause';
				select('audio').play();
			} else{
				selectAll('.play')[index].textContent = 'Continue';
				select('audio').pause();
			}
		}
		changeMusicTitle(index);
	})
});

// Inisialiasi Class Wave untuk visualisasi audio
let wave = new Wave();

const options = {
	type : 'dualbars blocks',
	colors : ['#00a8ff']
}

wave.fromElement('music_controls', 'output', options);
