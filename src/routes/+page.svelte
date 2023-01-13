<script>
	import * as Tone from 'tone';

	let selectedProgression = null;
	const chords = [
		['C4', 'G4', 'A4', 'D5'],
		['F3', 'C4', 'G4', 'A4'],
		['G3', 'D4', 'A4', 'E5']
	];

	function playProgression() {
		const synth = new Tone.Synth().toDestination();
		const seq = new Tone.Sequence((time, note) => {
			synth.triggerAttackRelease(note, 0.1, time);
		}, selectedProgression).start(0);
		Tone.Transport.start();
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
	</div>
</div>
