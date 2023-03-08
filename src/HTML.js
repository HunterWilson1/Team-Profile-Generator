function createTeam() {

`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
    <title>Team Creator</title>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class=col-12 mb-3 bg-danger">
                <h1 class="text-center text-white"> My Team </h1>
            </div>
        </div>
    </div>
    <div class ="container">
        <div class="row">
            <div class ="row col-12 justify-content-center">
            ${createTeam(team)}
        </div>
    </div>
</body>
</html>
`
}
module.exports = markdownHTML;