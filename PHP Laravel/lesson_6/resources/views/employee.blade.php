<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<form action="{{route('store_employee')}}" method="post">
    @csrf
    <label for="first_name">First name:
        <input type="text" name="first_name" id="first_name" value="@if($employee){{$employee->first_name}}@endif">
    </label>
    <label for="last_name">Last name:
        <input type="text" name="last_name" id="last_name" value="@if($employee){{$employee->last_name}}@endif">
    </label>
    <label for="department">Department:
        <select name="department" id="department">
            <option value="finance" @if($employee && $employee->department == 'finance') selected @endif>Finance</option>
            <option value="it" @if($employee && $employee->department == 'it') selected @endif>IT</option>
            <option value="internal_service" @if($employee && $employee->department == 'internal_service') selected @endif>Internal Service</option>
        </select>
    </label>
    <input type="submit" value="Send">
</form>
</body>
</html>
