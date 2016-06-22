#include <node.h>
#include <string>
#include <iostream>

using namespace std;

namespace demo {

    using v8::FunctionCallbackInfo;
    using v8::Isolate;
    using v8::Local;
    using v8::Object;
    using v8::String;
    using v8::Value;

    void Method(const FunctionCallbackInfo<Value>& args) {
        Isolate* isolate = args.GetIsolate();

        string s;
        getline(cin,s);





        const char* res;
        res = s.c_str();
        args.GetReturnValue().Set(String::NewFromUtf8(isolate, res));
    }

    void init(Local<Object> exports) {
        NODE_SET_METHOD(exports, "cin", Method);
    }

    NODE_MODULE(addon, init)

}