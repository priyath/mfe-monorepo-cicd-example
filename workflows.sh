# read the workflow template
WORKFLOW_TEMPLATE=$(cat .github/workflow-template.yaml)

# iterate each route in routes directory
for APP in $(ls packages); do
    echo "generating workflow for routes/${APP}"

    # replace template route placeholder with route name
    WORKFLOW=$(echo "${WORKFLOW_TEMPLATE}" | sed "s/{{APP}}/${APP}/g")

    # save workflow to .github/workflows/{APP}
    echo "${WORKFLOW}" > .github/workflows/${APP}.yaml
done