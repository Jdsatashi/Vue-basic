<script>
	export default {
		data(){
			return {
				images: {
					1: {
						'name': 'Towa',
						'url': 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/11ada0d9-de1a-4c10-9bf7-c9bbd899a112/dekw84o-97c43492-80cf-4da5-b020-268f2b386959.png/v1/fill/w_894,h_894,q_70,strp/tokoyami_towa_by_rearok21_dekw84o-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAwMCIsInBhdGgiOiJcL2ZcLzExYWRhMGQ5LWRlMWEtNGMxMC05YmY3LWM5YmJkODk5YTExMlwvZGVrdzg0by05N2M0MzQ5Mi04MGNmLTRkYTUtYjAyMC0yNjhmMmIzODY5NTkucG5nIiwid2lkdGgiOiI8PTEwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.1afrvyTF9CLlrs4ABbD7X5hAISlKdDLkIZQiriWOWUE'
					}
				},
				showDropdown: false,
				showSidebar: true
			}
		},
		methods: {
			onClickDropdown() {
				this.showDropdown = !this.showDropdown
			},
			onClickSidebar() {
				this.showSidebar = !this.showSidebar;
			},
		},
	};
</script>

<template>
	<div class='w-screen h-screen flex'>
		<!--Side bar-->
		<div class='w-[300px] h-full bg-gray-200 text-white' v-show='showSidebar'>
			<div class="h-[50px] bg-gray-800 flex justify-start  items-center ">
				<div class="px-[20px]">
					<h3 class="font-bold text-xl">Admin Dashboard</h3>
				</div>
			</div>
			<div class='h-[calc(100vh-50px)] bg-gray-600 py-[20px]'>
				<div class='flex flex-col justify-between h-full'>
					<div class=" flex flex-col justify-between space-y-[10px]">
						<div class='flex flex-col justify-between h-full px-[20px] space-y-[10px]'>
							<router-link to="/home" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">
								<font-awesome-icon icon="house" size='xl' class='ms-0.5 me-1.5'/>
								Home
							</router-link>

							<router-link to="/" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">
								<font-awesome-icon icon="inbox" size='xl' class='ms-0.5 me-1.5'/>
								Dashboard
							</router-link>
							<router-link to="/profile" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">
								<font-awesome-icon icon="address-card" size="xl" class='ms-0.5 me-1.5'/>
								Profile
							</router-link>
							<router-link to="/" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">
								<font-awesome-icon icon="bell" size="xl" class='ms-0.5 me-1.5'/>
								Notifications
							</router-link>
							<router-link to="/" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">
								<font-awesome-icon icon="download" size="xl" class='ms-0.5 me-1.5'/>
								Download
							</router-link>
						</div>
					</div>
					<div class='flex flex-col h-[80px] px-[20px] space-y-[10px]'>
						<router-link to="/" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">
							<font-awesome-icon icon="gear" size='xl' class='ms-0.5 me-1.5'/>
							Settings
						</router-link>

						<router-link to="/" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">
							<font-awesome-icon icon="right-from-bracket" size="xl" class='ms-0.5 me-1.5'/>
							Logout
						</router-link>
					</div>
				</div>
			</div>
		</div>
		<!--Content-->
		<div class='w-full h-full bg-gray-100'>
			<div class='h-[50px] bg-gray-300 flex items-center shadow-sm px-[20px) w-full py-[10px] z-10 border-b'>
				<div class='cursor-pointer ms-4 w-[56px]' @click="onClickSidebar">
					<font-awesome-icon icon="bars" size="xl" class='pt-2 pb-2 pe-4 ps-4 rounded-md border-gray-200 hover:bg-gray-400'/>
				</div>
				<!-- Search bar -->

				<div class="w-[calc(100%-30px)] flex">
					<div class="w-[calc(100%-200px)] flex justify-center ">
						<!-- Search bar -->
						<form class="flex items-center w-[500px]">
							<label for="voice-search" class="sr-only">Search</label>
							<div class="relative w-full">
								<div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
									<font-awesome-icon icon="magnifying-glass" class='text-gray-200'/>
								</div>
								<input type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required>
								<router-link to="/" class="flex absolute inset-y-0 right-0 items-center pr-3">
									<font-awesome-icon icon="microphone" class='text-gray-200 hover:text-blue-200'/>
								</router-link>
							</div>
						</form>
					</div>
					<!-- User login -->
					<div class="w-[200px] ">
						<div class="flex items-center justify-start space-x-1" @click="onClickDropdown">
							<img class="w-10 h-10 rounded-full border-2 border-gray-50 hover:border-2 hover:border-blue-100 hover:w-11 hover:h-11" :src="images[1].url" :alt="images[1].name">
							<div class="font-semi-bold dark:text-blue-950 text-left ps-2 pe-2 rounded-md border-gray-200 hover:bg-gray-400">
								<div>Administrator</div>
								<div class="text-xs text-gray-600 dark:text-gray-500">Admin</div>
							</div>
						</div>
						<!-- Drop down -->
						<div v-show="showDropdown" class="absolute right-[10px] z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
							<div class="py-1 text-left" role="none">
								<!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
								<a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
								<a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
								<a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
								<form method="POST" action="#" role="none">
									<button type="submit" class="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class='h-[calc(100vh-50px)] bg-gray-50 p-[20px]'>
				<div class='border border-gray-300 rounded-md p-[20px] h-full'>
					<router-view></router-view>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
router-link:hover :scope font-awesome-icon{
	color: #718096;
}
</style>