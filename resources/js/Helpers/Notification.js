class Notification {
    success() {
        new Noty({
            type: "success",
            layout: "topRight",
            text: "Succesfully Done!",
            timeout: 1500
        }).show();
    }
    alert() {
        new Noty({
            type: "alert",
            layout: "topRight",
            text: "Are you sure?",
            timeout: 1500
        }).show();
    }
    error() {
        new Noty({
            type: "error",
            layout: "topRight",
            text: "Something went wrong!",
            timeout: 1500
        }).show();
    }
    warning() {
        new Noty({
            type: "warning",
            layout: "topRight",
            text: "Oops Wrong!",
            timeout: 1500
        }).show();
    }

    image_validation() {
        new Noty({
            type: "error",
            layout: "topRight",
            text: "Image Size must be less then 1MB",
            timeout: 1000
        }).show();
    }
}

export default Notification = new Notification();
