	<script>
		let url = 'http://10.8.40.69:3000/Antrian';

		new Vue({
			el: '#layer',
			data() {
				return {
					devices: [],
				}
			},
			async mounted() {
				const response = await axios.get(url);
				this.devices = response.data.device;
			}



		})
	</script>
  
  //fetch data
  	<table class="table table-bordered table-responsive-sm-6">
												<!-- <a class="btn btn-primary" href="insertDevice" class="btn-danger">Insert Antrian</a> -->
												<thead class="thead-dark">
													<tr>
														<th>dev EUI </th>
														<th>Data</th>
														<th>fCnt</th>
														<th>fPort</th>
												</thead>
												</tr>
												<tr v-for="device in devices">
													<td>{{device.devEUI}}</td>
													<td>{{device.data}}</td>
													<td>{{device.fPort}}</td>
													<td>{{device.fCnt}}</td>
												</tr>
											</table>
