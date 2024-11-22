<script>
	import 'iconify-icon';
	let year = $state();
	let month = $state();
	let day = $state();
</script>

<h1 class="text-offblack text-2xl font-bold">Age Calculator</h1>
<div
	class="flex-container bg-white border-red box-content flex h-[450px] w-[800px] flex-col rounded-l-3xl rounded-br-[175px]
rounded-tr-3xl border-4 p-4"
>
	<div class="border-blue flex h-[110px] w-[550px] items-center justify-evenly border-4">
		<div class="  justify-left border-green-400 flex h-[90px] w-[140px] flex-col gap-2 border-2">
			<div class=" border-purple-400 h-[30px] w-[80px] border-2">DAY</div>
			<div><input class=" h-[35px] w-[80px]" type="number" bind:value={day} /></div>
		</div>

		<div
			class="  justify-left gap- border-green-400 flex h-[90px] w-[140px] flex-col gap-2 border-2"
		>
			<div class=" border-purple-400 h-[30px] w-[80px] border-2">MONTH</div>
			<div><input class=" h-[35px] w-[80px]" type="number" bind:value={month} /></div>
		</div>
		<div
			class="  justify-left gap- border-green-400 flex h-[90px] w-[140px] flex-col gap-2 border-2"
		>
			<div class=" border-purple-400 h-[30px] w-[80px] border-2">YEAR</div>
			<div><input class=" h-[35px] w-[80px]" type="number" bind:value={year} /></div>
		</div>
	</div>
	<hr class="border-gray-300 mt-10 block w-full border-t-2" />
	<button
		class="text-white bg-indigo-600 flex h-20 w-20 items-center justify-center rounded-full"
		aria-label="calculate_age"
		><iconify-icon icon="iconoir:arrow-down" class="text-5xl"></iconify-icon></button
	>
</div>
