<h4>Todo List</h4>
<div>
            <h5>12 March 2024</h5>
            <hr>
            <ul>
                @for($i=0; $i<sizeof($todos); $i++)
                    <li>
                        <input type="checkbox">
                        <!-- <a href="/todo/edit">
                        {{ $todos[$i]["tadk"]}}</br>
                        </a> -->
                        <image src="/{{ str_replace('public','storage', $todos[$i]["image"]) }}"/>
                        {{ $todos[$i]["tadk"]}}</br>
                        <!-- {{ $todos[$i]["description"]}} -->
                    </li>
                @endfor
            </ul>
        
        </div>

        <style>
    h4{
        text-align:center;
    }
    ul{
        list-style: none;
    }
</style>