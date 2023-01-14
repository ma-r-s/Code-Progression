<script>
	import * as Tone from 'tone';

	const chords = [
		['C4', 'G4', 'A4', 'D5'],
		['F3', 'C4', 'G4', 'A4'],
		['G3', 'D4', 'A4', 'E5']
	];
	let selectedProgression = chords[0];

	function playProgression() {
		Tone.Transport.cancel();
		let synth = new Tone.PolySynth().toDestination();
		new Tone.Sequence(
			(time, note) => {
				synth.triggerAttackRelease(note, '8n', time);
			},
			selectedProgression,
			'8n'
		).start();
		Tone.Transport.start();
	}
	function stopProgression() {
		Tone.Transport.clear();
		Tone.Transport.stop();
	}
</script>

<div class="bg-gray-800 min-h-screen flex flex-col items-center justify-center p-4 text-center">
	<h1 class="text-white font-medium">Chord Progression Generator</h1>
	<div class="flex justify-center m-4">
		<label for="progression" class="text-white font-medium m-2">Chord Progression:</label>
		<select id="progression" bind:value={selectedProgression}>
			{#each chords as chord}
				<option value={chord}>{chord.join(' - ')}</option>
			{/each}
		</select>
	</div>
	<div class="flex justify-center m-4">
		<button
			class="bg-blue-500 text-white font-bold py-2 px-4 rounded-full m-2"
			on:click={playProgression}
		>
			Play Progression
		</button>
		<button
			class="bg-red-500 text-white font-bold py-2 px-4 rounded-full m-2"
			on:click={stopProgression}
		>
			Stop Progression
		</button>
	</div>
</div>
