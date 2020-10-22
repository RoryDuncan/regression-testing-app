<style>
	.table-header {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		font-size: 0.7rem;
		height: auto;
		border: 1px solid #bbb;
		font-weight: 600;
		align-items: center;
		margin-bottom: 2px;
		position: sticky;
		top: 0px;
		z-index: 1;
		background-color: #fff;
	}
	
	.table-header > * {
		align-items: center;
		padding: 0.25rem 0.5rem;
		border-left: 1px solid #bbb;
		margin: auto 0;
		height: 100%;
		border-bottom: none;
	}
	
	.table-header > :first-child {
		border-left: none;
	}

	.title {
		
	}
	
	.areas {
		color: #bbb;
	}
</style>

<header class="table-header">
	<div class="title">Feature Title, <span class="areas">Areas</span></div>
	<div>Status</div>
	<div>Tested By</div>
</header>