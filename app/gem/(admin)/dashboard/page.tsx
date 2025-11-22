"use client";

import { useState } from "react";
import {
  Sparkles,
  LogOut,
  Plus,
  Edit2,
  Trash2,
  BarChart3,
  MessageSquare,
  Quote as QuoteIcon,
  Tag,
} from "lucide-react";
import { IQuote } from "@/database/quote.model";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { redirect } from "next/navigation";

function Dashboard() {
  const [editingQuote, setEditingQuote] = useState<IQuote | null>(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [newQuote, setNewQuote] = useState({ text: "", author: "", category: "" });

  const handleLogout = () => {
    logout();
    redirect("/");
  };

  function addQuote(quote: { text: string; author: string; category: string }) {
    // Implementation for adding a quote
  }

  function updateQuote(
    id: string,
    updatedQuote: { text: string; author: string; category: string }
  ) {
    // Implementation for updating a quote
  }

  function deleteQuote(id: string) {}

  function getCategories() {
    return [];
  }

  function logout() {}

  const quotes = [
    {
      id: "1",
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
      category: "Motivation",
      createdAt: "2024-01-01T00:00:00Z",
    },
  ];

  const feedbackSubmissions = [
    {
      id: "1",
      name: "Jane Doe",
      email: "",
    },
  ];

  const handleAddQuote = () => {
    if (newQuote.text && newQuote.author && newQuote.category) {
      addQuote(newQuote);
      setNewQuote({ text: "", author: "", category: "" });
      setIsAddDialogOpen(false);
    }
  };

  const handleUpdateQuote = () => {
    if (editingQuote && editingQuote.text && editingQuote.author && editingQuote.category) {
      updateQuote("2", {
        text: editingQuote.text,
        author: editingQuote.author,
        category: editingQuote.category,
      });
      setEditingQuote(null);
      setIsEditDialogOpen(false);
    }
  };

  const handleDeleteQuote = (id: string) => {
    if (window.confirm("Are you sure you want to delete this quote?")) {
      deleteQuote(id);
    }
  };

  const categories = getCategories();
  const categoryStats = categories.map((cat) => ({
    name: cat,
    count: quotes.filter((q) => q.category === cat).length,
  }));

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Admin Header */}
      <nav className="border-b bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-blue-400" />
            <span className="text-xl">Quotify Admin</span>
          </div>
          <Button
            variant="outline"
            onClick={handleLogout}
            className="gap-2 bg-transparent border-white text-white hover:bg-white hover:text-slate-900">
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 mb-1">Total Quotes</p>
                  <p className="text-3xl">{quotes.length}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <QuoteIcon className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 mb-1">Categories</p>
                  <p className="text-3xl">{categories.length}</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Tag className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 mb-1">Feedback Received</p>
                  <p className="text-3xl">{feedbackSubmissions.length}</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="quotes" className="space-y-6">
          <TabsList>
            <TabsTrigger value="quotes">Manage Quotes</TabsTrigger>
            <TabsTrigger value="statistics">Statistics</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
          </TabsList>

          {/* Manage Quotes Tab */}
          <TabsContent value="quotes">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl">All Quotes</h2>
                  <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                    <DialogTrigger asChild>
                      <Button className="gap-2">
                        <Plus className="w-4 h-4" />
                        Add New Quote
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Add New Quote</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="new-text">Quote Text</Label>
                          <Textarea
                            id="new-text"
                            value={newQuote.text}
                            onChange={(e) => setNewQuote({ ...newQuote, text: e.target.value })}
                            placeholder="Enter the quote text..."
                            rows={4}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="new-author">Author</Label>
                          <Input
                            id="new-author"
                            value={newQuote.author}
                            onChange={(e) => setNewQuote({ ...newQuote, author: e.target.value })}
                            placeholder="Author name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="new-category">Category</Label>
                          <Input
                            id="new-category"
                            value={newQuote.category}
                            onChange={(e) => setNewQuote({ ...newQuote, category: e.target.value })}
                            placeholder="e.g., Motivation, Life, Success"
                          />
                        </div>
                        <Button onClick={handleAddQuote} className="w-full">
                          Add Quote
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {quotes.map((quote: any) => (
                    <div
                      key={quote.id}
                      className="p-4 border rounded-lg hover:border-slate-300 transition-colors">
                      <blockquote className="text-slate-900 mb-2 italic">"{quote.text}"</blockquote>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-slate-600">— {quote.author}</span>
                          <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">
                            {quote.category}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Dialog
                            open={isEditDialogOpen && editingQuote?.id === quote.id}
                            onOpenChange={(open) => {
                              setIsEditDialogOpen(open);
                              if (!open) setEditingQuote(null);
                            }}>
                            <DialogTrigger asChild>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setEditingQuote(quote)}>
                                <Edit2 className="w-4 h-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Edit Quote</DialogTitle>
                              </DialogHeader>
                              {editingQuote && (
                                <div className="space-y-4">
                                  <div className="space-y-2">
                                    <Label htmlFor="edit-text">Quote Text</Label>
                                    <Textarea
                                      id="edit-text"
                                      value={editingQuote.text}
                                      onChange={(e) =>
                                        setEditingQuote({ ...editingQuote, text: e.target.value })
                                      }
                                      rows={4}
                                    />
                                  </div>
                                  <div className="space-y-2">
                                    <Label htmlFor="edit-author">Author</Label>
                                    <Input
                                      id="edit-author"
                                      value={editingQuote.author}
                                      onChange={(e) =>
                                        setEditingQuote({ ...editingQuote, author: e.target.value })
                                      }
                                    />
                                  </div>
                                  <div className="space-y-2">
                                    <Label htmlFor="edit-category">Category</Label>
                                    <Input
                                      id="edit-category"
                                      value={editingQuote.category}
                                      onChange={(e) =>
                                        setEditingQuote({
                                          ...editingQuote,
                                          category: e.target.value,
                                        })
                                      }
                                    />
                                  </div>
                                  <Button onClick={handleUpdateQuote} className="w-full">
                                    Update Quote
                                  </Button>
                                </div>
                              )}
                            </DialogContent>
                          </Dialog>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDeleteQuote(quote.id)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Statistics Tab */}
          <TabsContent value="statistics">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-6 h-6 text-slate-600" />
                    <h2 className="text-2xl">Category Distribution</h2>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {categoryStats.map((stat) => (
                      <div key={stat.name} className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-900">{stat.name}</span>
                          <span className="text-slate-600">{stat.count} quotes</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-blue-600 rounded-full transition-all"
                            style={{ width: `${(stat.count / quotes.length) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <h2 className="text-2xl">Quick Stats</h2>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <p className="text-slate-600 mb-1">Most Popular Category</p>
                      <p className="text-2xl text-slate-900">
                        {categoryStats.length > 0
                          ? categoryStats.reduce((a, b) => (a.count > b.count ? a : b)).name
                          : "N/A"}
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <p className="text-slate-600 mb-1">Average per Category</p>
                      <p className="text-2xl text-slate-900">
                        {categories.length > 0 ? Math.round(quotes.length / categories.length) : 0}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Feedback Tab */}
          <TabsContent value="feedback">
            <Card>
              <CardHeader>
                <h2 className="text-2xl">User Feedback & Quote Requests</h2>
              </CardHeader>
              <CardContent>
                {feedbackSubmissions.length === 0 ? (
                  <div className="text-center py-12 text-slate-500">
                    <MessageSquare className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p>No feedback submissions yet</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {feedbackSubmissions.map((submission: any) => (
                      <div key={submission.id} className="p-4 border rounded-lg">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-slate-900">{submission.name}</h3>
                            <p className="text-sm text-slate-600">{submission.email}</p>
                          </div>
                          <span
                            className={`px-3 py-1 rounded-full text-sm ${
                              submission.type === "quote-request"
                                ? "bg-purple-100 text-purple-700"
                                : "bg-blue-100 text-blue-700"
                            }`}>
                            {submission.type === "quote-request" ? "Quote Request" : "Feedback"}
                          </span>
                        </div>
                        <p className="text-slate-700 whitespace-pre-wrap mb-2">
                          {submission.message}
                        </p>
                        <p className="text-xs text-slate-500">
                          Submitted: {new Date(submission.submittedAt).toLocaleString()}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default Dashboard;
