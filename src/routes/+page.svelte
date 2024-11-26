<script>
	import 'iconify-icon';
	let year = $state();
	let month = $state();
	let day = $state();
</script>

<h1 class="text-2xl font-bold text-offblack">Age Calculator</h1>
<div
	class="flex-container box-content flex h-[450px] w-[800px] flex-col rounded-l-3xl rounded-br-[175px] rounded-tr-3xl border-4
border-red-600 bg-white p-4"
>
	<div class="flex h-[110px] w-[550px] items-center justify-evenly border-4 border-blue-500">
		<div class="  justify-left flex h-[90px] w-[140px] flex-col gap-2 border-2 border-green-400">
			<div class=" border-purple-400 h-[30px] w-[80px] border-2">DAY</div>
			<div><input class=" h-[35px] w-[80px]" type="number" bind:value={day} /></div>
		</div>

		<div
			class="  justify-left gap- flex h-[90px] w-[140px] flex-col gap-2 border-2 border-green-400"
		>
			<div class=" border-purple-400 h-[30px] w-[80px] border-2">MONTH</div>
			<div><input class=" h-[35px] w-[80px]" type="number" bind:value={month} /></div>
		</div>
		<div
			class="  justify-left gap- flex h-[90px] w-[140px] flex-col gap-2 border-2 border-green-400"
		>
			<div class=" border-purple-400 h-[30px] w-[80px] border-2">YEAR</div>
			<div><input class=" h-[35px] w-[80px]" type="number" bind:value={year} /></div>
		</div>
	</div>

	<hr class="mt-10 block w-full border-t-2 border-gray-300" />
	<button
		class="flex h-20 w-20 items-center justify-center rounded-full bg-indigo-600 text-white"
		aria-label="calculate_age"
		><iconify-icon icon="iconoir:arrow-down" class="text-5xl"></iconify-icon></button
	>
</div>
