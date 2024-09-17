### Source

> https://www.youtube.com/watch?v=NS0RI2CfMLE

## This Git

> https://github.com/samedan/2409_laravel_react_crud

### React installed in 'react-rest-api' folder

## Tailwind

## FlowBite

### Skill Model& Controller

> php artisan make:controller Api/V1/SkillController

### Api.php

> add Route::apiResource('skills', SkillController::class);
> php artisan route:list
> GET|HEAD / .............................................................................
> POST \_ignition/execute-solution ignition.executeSolution › Spatie\LaravelIgnition …  
>  GET|HEAD \_ignition/health-check ignition.healthCheck › Spatie\LaravelIgnition › HealthC…  
>  POST \_ignition/update-config ignition.updateConfig › Spatie\LaravelIgnition › Updat…  
>  GET|HEAD api/user ......................................................................  
>  GET|HEAD api/v1/skills ..................... skills.index › Api\V1\SkillController@index  
>  POST api/v1/skills ..................... skills.store › Api\V1\SkillController@store  
>  GET|HEAD api/v1/skills/{skill} ............... skills.show › Api\V1\SkillController@show  
>  PUT|PATCH api/v1/skills/{skill} ........... skills.update › Api\V1\SkillController@update  
>  DELETE api/v1/skills/{skill} ......... skills.destroy › Api\V1\SkillController@destroy  
>  GET|HEAD sanctum/csrf-cookie sanctum.csrf-cookie › Laravel\Sanctum › CsrfCookieControll…

## Create POST Route

> php artisan make:request StoreSkillRequest
> add StoreSkillRequest to SkillController
> StoreSkillRequest add rules()

### Filter data sent to frontEnd

> php artisan make:resource V1/SkillResource
> SkillController -> return new SkillResource($skill)

# ////////////////////////////////////////////////////

### React & Tailwind

> https://tailwindcss.com/docs/guides/create-react-app
> Axios & React-router-dom
> npm i react-router-dom, npm i axios
