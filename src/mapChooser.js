function mapChooser(locationName){
    if (!locationName) {
        locationName = "none";
    }
    let imageName = locationName + ".jpg";
    return (imageName);
}

export default mapChooser;
