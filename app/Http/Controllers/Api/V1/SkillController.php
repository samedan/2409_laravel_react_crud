<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSkillRequest;
use App\Http\Resources\V1\SkillCollection;
use App\Http\Resources\V1\SkillResource;
use App\Models\Skill;
use Illuminate\Http\Request;

class SkillController extends Controller
{
    // GET All Skills Index
    public function index() {
        // return response()->json("Skill index");
        // return SkillResource::collection((Skill::all()));
        
        // Return collection
        // return SkillResource::collection((Skill::paginate(1)));

        // return SkillCollection
        return new SkillCollection((Skill::paginate(1)));
    }
    // GET specific skill http://127.0.0.1:8000/api/v1/skills/1
    public function show(Skill $skill){
        return new SkillResource($skill);
    }

    // POST index
    public function store(StoreSkillRequest $request) {
        Skill::create($request->validated());
        return response()->json('Skill created');
    }

    // UPDATe PUT
    public function update(StoreSkillRequest $request, Skill $skill) {
        $skill->update($request->validated());
        return response()->json("Skill UPDATEd");
    }

    // DELETE Skill
    public function destroy(Skill $skill) {
        $skill->delete();
        return response()->json("Skill DELETED");
    }
}
