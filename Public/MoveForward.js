// Event: Frame Updated
// Properties:
//@input float speed = 1.0 {"widget": "slider", "min": 0, "max": 10.0, "step": 0.01}
//@input float range = 10.0 {"widget": "slider", "min": 0, "max": 30.0, "step": 0.01}
//@input int max_distance = 50 {"widget": "slider", "min": 0, "max": 1000, "step": 1}
var newZ = getTime() * script.speed * script.range;
if(newZ < max_distance){
    script.getSceneObject().getTransform().setLocalPosition(new vec3(0, 0, newZ));
}
