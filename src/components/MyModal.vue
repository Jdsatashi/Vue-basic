<template>
	<div class="modal fade show">
		<div class="modal-dialog">
			<div class="modal-content" :class="{ ' bg-purple': theme === 'contact'}">
				<div class="modal-header">
					<h2>{{ title }}</h2>
				</div>
				<div class="modal-body">
					<p>{{ body }}</p>
				</div>
				<div class="modal-footer">
					<button type="button">
						{{ footer }}
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true,
		},
		body: {
			type: String,
			required: true,
		},
		footer: {
			type: String,
			default: "Test",
		},
		theme: {
			type: String,
			default: "example",
			validator(value) {
				return ['example', 'contact', 'sale'].includes(value)
			}
		}
	},
	data() {
		return {}
	}
}
</script>

<style scoped>
.modal {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1060;
	display: block;
	width: 100%;
	height: 100%;
	overflow-x: hidden;
	overflow-y: auto;
	outline: 0;
	background: rgba(0, 0, 0, 0.2);
}

.fade {
	transition: opacity .15s linear;
}

.modal-dialog {
	position: relative;
	width: auto;
	margin: 1.75rem;
	pointer-events: none;
}

@media (min-width: 576px) {
	.modal-dialog {
		max-width: 500px;
		margin: 3.75rem auto;
	}
}

.modal.fade .modal-dialog {
	transition: transform .3s ease-out;
	transform: translate(0, -50px);
}

.modal-content {
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;
	pointer-events: auto;
	background-color: #fff;
	background-clip: padding-box;
	border: 1px solid rgba(0, 0, 0, .2);
	border-radius: 0.3rem;
	outline: 0;
}

.modal-content.bg-purple {
	background-color: #f3e4ff;
}

.modal-header {
	display: flex;
	flex-shrink: 0;
	align-items: center;
	justify-content: space-between;
	padding: 1rem 1rem;
	border-bottom: 1px solid #dee2e6;
	border-top-left-radius: calc(0.3rem - 1px);
	border-top-right-radius: calc(0.3rem - 1px);
}

.modal-body {
	position: relative;
	flex: 1 1 auto;
	padding: 1rem;
}

.modal-footer {
	display: flex;
	flex-wrap: wrap;
	flex-shrink: 0;
	align-items: center;
	justify-content: flex-end;
	padding: 0.75rem;
	border-top: 1px solid #dee2e6;
	border-bottom-right-radius: calc(0.3rem - 1px);
	border-bottom-left-radius: calc(0.3rem - 1px);
}
</style>
