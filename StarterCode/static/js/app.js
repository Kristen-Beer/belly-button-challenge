function buildMetadata(sample) {
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
        let metadata = data.metadata;
        let resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
        let result = resultArray[0];
        let PANEL = d3.select('#sample-metadata');
        // CLEAR METADATA
        PANEL.html("");
        // APPEND KEYS
        for (key in result){
            PANEL.append("h6").text(`${key.toUpperCase()}: ${result[key]}`);
        };
    });
}