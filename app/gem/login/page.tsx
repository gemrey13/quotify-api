"use client";

import { useState } from "react";
import { Sparkles, Lock } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

function Login() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  function login(username: string, password: string) {
    // Simple hardcoded authentication for demo purposes
    return username === "admin" && password === "quotify123";
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const success = login(credentials.username, credentials.password);
    if (success) {
      redirect("/gem/dashboard");
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-blue-400" />
            <span className="text-3xl text-white">Quotify</span>
          </div>
          <p className="text-slate-400">Gem Access</p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <Lock className="w-6 h-6 text-slate-600" />
              <h1 className="text-2xl">Gem Login</h1>
            </div>
            <p className="text-slate-600 text-sm">
              Enter your credentials to access the gem dashboard
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
                  {error}
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  required
                  value={credentials.username}
                  onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                  placeholder="Enter username"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  placeholder="Enter password"
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                Sign In
              </Button>

              {/* <div className="text-center text-sm text-slate-500 mt-4 p-4 bg-slate-50 rounded">
                <p className="mb-1">Demo Credentials:</p>
                <p>
                  Username: <code className="text-slate-700">admin</code>
                </p>
                <p>
                  Password: <code className="text-slate-700">quotify123</code>
                </p>
              </div> */}
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Login;
