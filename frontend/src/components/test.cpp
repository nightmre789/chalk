
#include <iostream>
#include <bits/stdc++.h>

using namespace std;

int main()
{
    vector<int> g1;
    int x;

    for (int i = 1; i <= 5; i++)
    {
        cin >> x;
        g1.push_back(x);
    }

    for (const auto &el : g1)
        cout << el << " ";

    cout << "Output of begin and end: ";
    for (auto i = g1.begin(); i != g1.end(); ++i)
        cout << *i << " ";

    cout << "\nOutput of cbegin and cend: ";
    for (auto i = g1.cbegin(); i != g1.cend(); ++i)
        cout << *i << " ";

    cout << "\nOutput of rbegin and rend: ";
    for (auto ir = g1.rbegin(); ir != g1.rend(); ++ir)
        cout << *ir << " ";

    cout << "\nOutput of crbegin and crend : ";
    for (auto ir = g1.crbegin(); ir != g1.crend(); ++ir)
        cout << *ir << " ";

    return 0;
}