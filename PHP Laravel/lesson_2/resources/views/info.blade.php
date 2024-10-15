<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>User info</title>
</head>
<body>
    <table border="4" @if($user['id'] == 0) style="background-color: yellow" @endif>
        <tr><td>Username:</td><td>{{$user['username']}}</td></tr>
        <tr><td>First Name:</td><td>{{$user['first_name']}}</td></tr>
        <tr><td>Last Name:</td><td>{{$user['last_name']}}</td></tr>
        <tr><td>List of books</td><td>
                @foreach($user['list_of_books'] as $item)
                    {{$item}} <br>
                @endforeach
            </td></tr>
    </table>
</body>
</html>
