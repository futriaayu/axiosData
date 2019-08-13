<script>
	let url = 'http://10.8.40.69:3000/Antrian'; //get data

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
<div class="card">
	<div class="header">
		<div class="row clearfix">
			<div class="col-xs-12 col-sm-8">
				<h2>Data Antrian</h2>
				<div id="layer">
					<div class="body table-responsive">
						<table class="table table-bordered table-responsive-sm-6">
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
					</div>
					<h2><div id="lihatantrian"></div></h2><br>
					<button class="btn btn-danger" onclick="LihatAntrian()" class="btn-success">Lihat Jumlah Antrian</button>
				</div>
			</div>
		</div>
		<ul class="header-dropdown m-r--5">
		</ul>
	</div>
</div>
</div>
</div>
