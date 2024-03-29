### Working curl command for creating tickets

curl -X POST -H "Content-Type: application/json" -H "Authorization: Token token=h_sHaMvYVfPRRJ_LdgW3F3018xsh44Iy2iox6onvIbhsazdQIRBODWgiDBeB_30E" -d '{
	"title": "Configurator title test ticket",
	"group_id": 1,
	"customer_id": 123,
	"article": {
		"subject": "Configurator test ticket",
		"body": "body test",
		"type": "note",
		"internal": false
	}
}' https://support.speedbone.de/api/v1/tickets

### Working curl command for creating customers 

curl -X POST -H "Authorization: Token token=h_sHaMvYVfPRRJ_LdgW3F3018xsh44Iy2iox6onvIbhsazdQIRBODWgiDBeB_30E" -H "Content-Type: application/json" -d '{
  "firstname": "Vorname",
  "lastname": "Nachname",
  "email": "test@test.de"
}' https://support.speedbone.de/api/v1/users



curl -X GET -H "Authorization: Token token=Z6zMoAaVAGLK2FoRiadd-JZ6HbOIA8lhD9O1CkesHxz_G4tFQc-iKa11-QxKn47m" https://support.speedbone.de/api/v1/groups