// {
//   "users": [ { "name": "sad" }, { "name": "bad" } ],
//   "gameMap": { "name": "MAP69" },
//   "startedAt": "2023-09-07T13:02:42.226Z",
//   "roomId": 11,
//   "_id": "64f9c9f2434c737c61d006cc"
// }
function createRoom(body) {
	return fetch('/replay/create', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	}).then(response => response.json())
}
// {
//   "_id": "64f9c9f1434c737c61d006c5",
//   "users": [ { "name": "red" }, { "name": "blue" } ],
//   "gameMap": { "name": "MAP69" },
//   "startedAt": "2023-09-07T13:02:41.867Z",
//   "roomId": 4,
//   "progress":{ "walkDistance":[70,101],"reward":[5,3,5,3,5,3,5,3,5,3] }  
// }
function getProgress(roomId) {
	return fetch(`/replay/progress/${roomId}`, {
		method: 'GET',
		headers: {
			'Accept': 'application/json'
		}
	}).then(response => {
		if (response.status === 404) {
			return null
		}
		return response.json()
	})
}

function putProgress(roomId, progress) {
	return fetch(`/replay/progress/${roomId}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			"progress": progress  // could be anything
		})
	})
}
