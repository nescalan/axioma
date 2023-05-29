<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="src\views\forms\condomino.css" />
    <title>Condominos</title>
</head>

<body>

    <div class="card">
        <div class="card-header">
            <div class="text-header">Register</div>
        </div>
        <div class="card-body">
            <form action="#">
                <div class="form-group">
                    <label for="username">Username:</label>
                    <input required="" class="form-control" name="username" id="username" type="text">
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input required="" class="form-control" name="email" id="email" type="email">
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input required="" class="form-control" name="password" id="password" type="password">
                </div>
                <div class="form-group">
                    <label for="confirm-password">Confirm Password:</label>
                    <input required="" class="form-control" name="confirm-password" id="confirm-password"
                        type="password">
                </div>
                <input type="submit" class="btn" value="submit">
            </form>
        </div>
    </div>
</body>

</html>