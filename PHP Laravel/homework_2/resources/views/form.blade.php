<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{csrf_token()}}">
    <title>Document</title>
</head>
<body>
<h1>Add User Form</h1>
<form action="{{url('/store_form')}}" method="post" name="add-user-form" id="add-user-form" >
    @csrf
    <div>
        <label for="name">Name: </label>
        <input type="text" name="name" id="name" required>
        <label for="surname">Surname: </label>
        <input type="text" name="surname" id="surname" required>
        <label for="email">Email: </label>
        <input type="email" name="email" id="email" required>
    </div>
    <button type="submit">Add</button>
</form>
</body>
</html>
