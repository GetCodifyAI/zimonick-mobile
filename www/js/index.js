/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
// document.addEventListener("deviceready", onDeviceReady, false);

// function onDeviceReady() {
// 	// Cordova is now initialized. Have fun!

// 	console.log("Running cordova-" + cordova.platformId + "@" + cordova.version);
// 	document.getElementById("deviceready").classList.add("ready");
// }

var app = {
	// Application Constructor
	initialize: function () {
		document.addEventListener("deviceready", this.onDeviceReady.bind(this), false);
		document
			.querySelector(".login-btn")
			.addEventListener("click", this.navigateToRemote.bind(this));
		// document.querySelector(".refresh-btn").addEventListener("click", function () {
		// 	window.location.reload();
		// });
	},

	// deviceready Event Handler
	//
	// Bind any cordova events here. Common events are:
	// 'pause', 'resume', etc.
	onDeviceReady: function () {
		universalLinks.subscribe("launchedAppFromLink", app.handleLaunchFromLink);
		this.receivedEvent("deviceready");
		screen.orientation.lock("portrait");
		if (this.isOnline()) {
			this.navigateToRemote();
		} else {
			document.addEventListener("offline", this.handleOffline.bind(this), false);
			document.addEventListener("online", this.handleOnline.bind(this), false);
		}
	},

	// Update DOM on a Received Event
	receivedEvent: function (id) {
		console.log("Received Event: " + id);
	},

	navigateToRemote() {
		window.location.replace("https://zimonick.cutanddry.com?__platform=" + device.platform);
	},

	handleOffline() {
		console.log("I am offline");
		document.querySelector(".login-btn").style = "display:none;";
		document.querySelector(".offline").style = "";
	},

	handleOnline() {
		console.log("I am online");
		document.querySelector(".login-btn").style = "";
		document.querySelector(".offline").style = "display:none;";
		this.navigateToRemote();
	},

	handleLaunchFromLink: function (eventData) {
		var url = eventData.url;
		if (url) {
			if (!url.includes("__platform")) {
				url += (url.match(/[\?]/g) ? "&" : "?") + "__platform=" + device.platform;
			}
			window.location.replace(url);
		}
	},

	isOnline() {
		return [
			Connection.ETHERNET,
			Connection.WIFI,
			Connection.CELL_2G,
			Connection.CELL_3G,
			Connection.CELL_4G,
			Connection.CELL,
		].includes(navigator.connection.type);
	},
};

app.initialize();
