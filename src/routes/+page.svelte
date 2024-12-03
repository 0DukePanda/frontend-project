<script>
	import 'iconify-icon';
	let year = $state();
	let month = $state();
	let day = $state();
	let resultyear = $state();
	let resultmonth = $state();
	let resultday = $state();

	function calculation() {
		// Aktuelles Datum
		const today = new Date();
		const currentYear = today.getFullYear();
		const currentMonth = today.getMonth() + 1;
		const currentDay = today.getDate();

		// Geburtsdatum aus den Eingaben
		const birthYear = parseInt(year) || 0;
		const birthMonth = parseInt(month) || 0;
		const birthDay = parseInt(day) || 0;

		// Validierung: Überprüfe, ob alle Felder ausgefüllt sind
		if (!birthYear || !birthMonth || !birthDay) {
			alert('Bitte alle Felder ausfüllen!');
			return;
		}

		// Validierung: Existiert das Datum?
		const birthDate = new Date(birthYear, birthMonth - 1, birthDay); // Monate sind 0-basiert
		if (
			birthDate.getFullYear() !== birthYear ||
			birthDate.getMonth() + 1 !== birthMonth ||
			birthDate.getDate() !== birthDay
		) {
			alert('Das eingegebene Datum ist ungültig!');
			return;
		}

		// Validierung: Liegt das Geburtsdatum in der Zukunft?
		if (birthDate > today) {
			alert('Das Geburtsdatum liegt in der Zukunft. Bitte gib ein korrektes Datum ein.');
			return;
		}

		// Altersberechnung
		let ageYears = currentYear - birthYear;
		let ageMonths = currentMonth - birthMonth;
		let ageDays = currentDay - birthDay;

		// Korrektur für negative Monate oder Tage
		if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
			ageYears--;
			ageMonths += 12;
		}

		if (ageDays < 0) {
			const lastMonth = new Date(currentYear, currentMonth - 1, 0); // Letzter Tag des letzten Monats
			ageDays += lastMonth.getDate();
			ageMonths--;
		}

		// Ergebnisse zuweisen
		resultyear = ageYears;
		resultmonth = ageMonths;
		resultday = ageDays;
	}
</script>

<h1 class="text-offblack text-5xl font-bold text-purple-600">Age Calculator</h1>
<div
	class="flex-container box-content flex h-[450px] w-[800px] flex-col rounded-l-3xl rounded-br-[175px] rounded-tr-3xl border-4
border-white bg-white p-4"
>
	<div class="ml-5 mt-5">
		<div class="flex h-[110px] w-[550px] items-center justify-evenly">
			<div class=" justify-left flex h-[90px] w-[140px] flex-col gap-2">
				<div class=" poppins-bold text h-[30px] w-[80px] text-sm tracking-[0.3rem] text-[#716f6f]">
					DAY
				</div>
				<div>
					<input
						class="poppins-bold mt-[-10px] h-[35px] w-[100px] rounded-md text-2xl text-[#141414] placeholder:text-purple-300"
						type="number"
						placeholder="DD"
						bind:value={day}
					/>
				</div>
			</div>

			<div class="  justify-left gap- flex h-[90px] w-[140px] flex-col gap-2">
				<div class="poppins-bold h-[30px] w-[80px] text-sm tracking-[0.3rem] text-[#716f6f]">
					MONTH
				</div>
				<div>
					<input
						class="poppins-bold mt-[-10px] h-[35px] w-[100px] rounded-md text-2xl text-[#141414] placeholder:text-purple-300"
						type="number"
						placeholder="MM"
						bind:value={month}
					/>
				</div>
			</div>
			<div class="  justify-left gap- flex h-[90px] w-[140px] flex-col gap-2">
				<div class="poppins-bold h-[30px] w-[80px] text-sm tracking-[0.3rem] text-[#716f6f]">
					YEAR
				</div>
				<div>
					<input
						class="poppins-bold mt-[-10px] h-[35px] w-[100px] rounded-md text-2xl text-[#141414] placeholder:text-purple-300"
						type="number"
						placeholder="YYYY"
						bind:value={year}
					/>
				</div>
			</div>
		</div>

		<div class="flex items-center space-x-4">
			<hr class="ml-8 mt-[-35px] w-[600px] border-gray-300 before:border-t-2" />
			<button
				class="mt-[-35px] flex h-20 w-20 items-center justify-center rounded-full bg-purple-500 text-white"
				aria-label="calculate_age"
				onclick={calculation}
			>
				<iconify-icon icon="iconoir:arrow-down" class="text-5xl"></iconify-icon>
			</button>
		</div>
		<div class="mt-[-10px] flex h-[215px] w-[550px] flex-col justify-evenly">
			<div class="mb-3 ml-[30px] flex w-[240px] items-baseline gap-2">
				<div class=" poppins-extrabold-italic inline h-[35px] text-8xl text-purple-500">
					{resultyear}
				</div>
				<div class="poppins-extrabold-italic inline h-[30px] text-8xl text-[#141414]">
					{#if resultyear === 1}
						year
					{:else}
						years
					{/if}
				</div>
			</div>

			<div class="mb-3 ml-[30px] flex w-[240px] items-baseline gap-2">
				<div class=" poppins-extrabold-italic inline h-[35px] text-8xl text-purple-500">
					{resultmonth}
				</div>
				<div class="poppins-extrabold-italic inline h-[30px] text-8xl text-[#141414]">
					{#if resultmonth === 1}
						month
					{:else}
						months
					{/if}
				</div>
			</div>

			<div class="mb-3 ml-[30px] flex w-[240px] items-baseline gap-2">
				<div class=" poppins-extrabold-italic inline h-[35px] text-8xl text-purple-500">
					{resultday}
				</div>
				<div class="poppins-extrabold-italic inline h-[30px] text-8xl text-[#141414]">
					{#if resultday === 1}
						day
					{:else}
						days
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>
