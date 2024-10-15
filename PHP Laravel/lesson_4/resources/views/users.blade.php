<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Users</title>
</head>
<body>
    @php
        $greenUser = 2;
        $italicUser = 4;
    @endphp
    <table border="3px">
        @foreach($users as $key=>$user)
            <tr style="@if($key === $greenUser) background: green
                       @elseif($key === $italicUser) font-style: italic;
                       @endif">
                <td>{{$key}}</td><td>{{$user}}</td>
            </tr>
        @endforeach
    </table>
</body>
</html>
