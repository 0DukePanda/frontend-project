<script>
	import '../app.css';
	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#dbdbdb]">
	{@render children()}
</div>
