.PHONY: create-secret
create-secret:
	@berglas create sm://$(GCP_PROJECT_ID)/${KEY} "${VALUE}"
