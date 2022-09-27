define("UsrSchema5317e724Page", [], function() {
	return {
		entitySchemaName: "UsrRealtyVisit",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "DATETIMEc0f157c3-c03c-49d4-bc2c-beef9fc2ae9f",
				"values": {
					"layout": {
						"colSpan": 10,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrVisitDatetime",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrOwner1d23af2f-8fc0-402d-9cff-1a7e908e2f57",
				"values": {
					"layout": {
						"colSpan": 14,
						"rowSpan": 1,
						"column": 10,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrOwner"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LOOKUP4ccc1cfe-d2a6-47b1-a465-05913612864c",
				"values": {
					"layout": {
						"colSpan": 10,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "UsrPotentialCustomer",
					"tip": {
						"content": {
							"bindTo": "Resources.Strings.LOOKUP4ccc1cfed2a647b1a46505913612864cTip"
						}
					},
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "STRINGd176bf0b-478e-44a3-8a0c-ebdbbf184ae2",
				"values": {
					"layout": {
						"colSpan": 14,
						"rowSpan": 1,
						"column": 10,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "UsrComment",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 3
			}
		]/**SCHEMA_DIFF*/
	};
});
