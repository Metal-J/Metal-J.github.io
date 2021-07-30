---
layout: post
title: Ray Tracing
categories: S11
---

<pre class="prettyprint">
#include <iostream>

int main() {

	// Image

	const int image_width = 3;
	const int image_height = 2;

	// Render

	std::cout << "P3\n" << image_width << ' ' << image_height << "\n255\n";

	for (int j = image_height-1; j >= 0; --j) {
		for (int i = 0; i < image_width; ++i) {
			auto r = double(i) / (image_width);
			auto g = double(j) / (image_height);
			auto b = 0.5;

			int ir = static_cast<int>(255.999 * r);
			int ig = static_cast<int>(255.999 * g);
			int ib = static_cast<int>(255.999 * b);

			std::cout << ir << ' ' << ig << ' ' << ib << '\n';
		}
	}
}

int x = foo();  /* This is a comment  <span class="nocode">This is not code</span>
  Continuation of comment */
int y = bar();
</pre>