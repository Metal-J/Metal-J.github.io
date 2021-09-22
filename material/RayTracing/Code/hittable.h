#pragma once
#include "ray.h"
#include "general.h"

class material;

struct hit_point {

	double root;
	point3 p;
	vec3 normal;

	bool front_face;
	inline void set_face_normal (const ray& r, const vec3& outward_normal) {

		front_face = dot (r.direction(), outward_normal) < 0;
		normal = front_face ? outward_normal : -outward_normal;

	}

	shared_ptr<material> mat_ptr;

};

class hittable {

	public:
		virtual bool hit (const ray& r, double t_min, double t_max, hit_point& h_point) const = 0;

};