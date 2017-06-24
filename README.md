# ndx-host
reports hostname and protocol to the server for ndx-framework apps  
------------------------------------------------------------------

## Usage
Install with  
```bash
bower install --save ndx-host
```
then `ndx.host` serverside will contain the host/protocol of the current request  
this is not async safe so wrap it in a closure before going async, eg  
```coffeescript
.use (ndx) ->
  ((host) ->
    setTimeout ->
      #host will be cool here
    , 1000
  )(ndx.host)
```